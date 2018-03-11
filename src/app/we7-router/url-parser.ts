

import { UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET } from '@angular/router';
import {
    matchSegments, decode, matchQueryParams, matchUrlQueryParamValue,
    decodeQuery
} from './common';
import { getDefaultQueryParams } from './common';
export class UrlParser {
    private remaining: string;
    params: { [key: string]: any } = {};
    private copyUrl: string;
    constructor(private url: string) {
        this.remaining = url;
        this.copyUrl = url;
        // 去掉无用项目
        this.consumeOptional('/');
        this.consumeOptional('web');
        this.consumeOptional('/');
        this.consumeOptional('app');
        this.consumeOptional('/');
        this.consumeOptional('index.php');
        this.parseQueryParams();
    }

    getParams() {
        return this.params;
    }
    parseRootSegment(): UrlSegmentGroup {
        this.consumeOptional('/');
        return new UrlSegmentGroup([], this.parseChildren());
    }

    parseQueryParams() {
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam();
            } while (this.consumeOptional('&'));
        }
    }

    parseFragment(): string | null {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    }
    num: number = 0;
    private parseChildren(): { [outlet: string]: UrlSegmentGroup } {
        let segments: UrlSegment[] = [];
        // 去掉无用项目
        if (this.params['do']) {
            segments.push(new UrlSegment(decode(this.params['do']), this.parseMatrixParams()));
        }
        let children: { [outlet: string]: UrlSegmentGroup } = {};
        let ext: string = this.params['ext'] || '';
        let exts = ext.split('/');
        exts.map(res => {
            if (res.length > 0) {
                segments.push(new UrlSegment(decode(res), this.parseMatrixParams()));
            }
        });
        let res: { [outlet: string]: UrlSegmentGroup } = {};
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        return res;
    }

    private parseWe7Segment(): UrlSegment {
        const path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        if (path === 'web' || path === 'index.php' || path === 'app') {
            return null;
        } else {
            return new UrlSegment(decode(path), this.parseMatrixParams());
        }
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

    private parseQueryParam(): void {
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
        if (this.params.hasOwnProperty(decodedKey)) {
            let currentVal = this.params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                this.params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        } else {
            this.params[decodedKey] = decodedVal;
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
