

import { UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import {
    matchSegments, decode, matchQueryParams, matchUrlQueryParamValue,
    decodeQuery
} from './common';
export class UrlParser {
    private remaining: string;
    constructor(private url: string) { this.remaining = url; }
    parseRootSegment(): UrlSegmentGroup {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
    }

    parseQueryParams(): { [key: string]: any } {
        const params: { [key: string]: any } = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    }

    parseFragment(): string | null {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    }
    num: number = 0;
    private parseChildren(): { [outlet: string]: UrlSegmentGroup } {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        let segments: UrlSegment[] = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        let children: { [outlet: string]: UrlSegmentGroup } = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        let res: { [outlet: string]: UrlSegmentGroup } = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        let params = this.parseQueryParams();
        // 如果有do=*** 添加一个segments
        if (params.do) {
            segments.push(new UrlSegment(params.do, {}));
        }
        // // 如果长度大于1 取最后一个
        if (segments.length > 1) {
            segments = [segments[segments.length - 1]];
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    }
    private parseSegment(): UrlSegment {
        const path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    }

    private parseMatrixParams(): { [key: string]: any } {
        const params: { [key: string]: any } = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    }

    private parseParam(params: { [key: string]: any }): void {
        const key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let value: any = '';
        if (this.consumeOptional('=')) {
            const valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    }

    private parseQueryParam(params: { [key: string]: any }): void {
        const key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let value: any = '';
        if (this.consumeOptional('=')) {
            const valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        const decodedKey = decodeQuery(key);
        const decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            let currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        } else {
            params[decodedKey] = decodedVal;
        }
    }

    private parseParens(allowPrimary: boolean): { [outlet: string]: UrlSegmentGroup } {
        const segments: { [key: string]: UrlSegmentGroup } = {};
        this.capture('(');

        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            const path = matchSegments(this.remaining);
            const next = this.remaining[path.length];
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error(`Cannot parse url '${this.url}'`);
            }
            let outletName: string = undefined!;
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            } else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            const children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    }

    private peekStartsWith(str: string): boolean {
        return this.remaining.startsWith(str);
    }

    private consumeOptional(str: string): boolean {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    }

    private capture(str: string): void {
        if (!this.consumeOptional(str)) {
            throw new Error(`Expected "${str}".`);
        }
    }
}
