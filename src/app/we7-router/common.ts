import { UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, ParamMap, convertToParamMap, DefaultUrlSerializer, UrlTree } from '@angular/router';
import { forEach, shallowEqual } from './collection';

export function serializeMobilePaths(segment: UrlSegmentGroup): string {
    let str = `app/index.php`;
    return str;
}

export function serializePaths(segments: UrlSegment[]): string {
    return segments.map(p => serializePath(p)).join('/');
}

export function serializeWebPaths(segment: UrlSegmentGroup): { root: string, do: string, ext: string } {
    const { segments } = segment;
    let _do = '';
    let _ext = '';
    segments.map((res, index) => {
        if (index === 0) {
            _do = res.path;
        }else{
            _ext += res.path;
        }
    });
    return {
        root: 'web/index.php',
        do: _do,
        ext: _ext
    }
}

function getQueryParams(name: string) {
    let url = parseURL();
    return url[name];
}

export function getDefaultQueryParams() {
    let res = {};
    let a = getQueryParams('a');
    if (a) {
        res['a'] = a;
    }
    let c = getQueryParams('c');
    if (c) {
        res['c'] = c;
    }
    let i = getQueryParams('i');
    if (i) {
        res['i'] = i;
    }
    let m = getQueryParams('m');
    if (m) {
        res['m'] = m;
    }
    return res;
}

export function parseURL(): { [k: string]: string } {
    const ret = {};
    const seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
            return true;
        }
    });
    seg.forEach((element, index) => {
        const idx = element.indexOf('=');
        const key = element.substring(0, idx);
        const val = element.substring(idx + 1);
        ret[key] = val;
    });
    return ret;
}

export function encodeUriQuery(s: string): string {
    return encodeUriString(s).replace(/%3B/gi, ';');
}

export function encodeUriSegment(s: string): string {
    return encodeUriString(s).replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%26/gi, '&');
}

export function decode(s: string): string {
    return decodeURIComponent(s);
}

export function decodeQuery(s: string): string {
    return decode(s.replace(/\+/g, '%20'));
}

export function serializePath(path: UrlSegment): string {
    return `${encodeUriSegment(path.path)}${serializeMatrixParams(path.parameters)}`;
}

function encodeUriString(s: string): string {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}

function serializeMatrixParams(params: { [key: string]: string }): string {
    return Object.keys(params)
        .map(key => `;${encodeUriSegment(key)}=${encodeUriSegment(params[key])}`)
        .join('');
}

export function equalSegments(as: UrlSegment[], bs: UrlSegment[]): boolean {
    return equalPath(as, bs) && as.every((a, i) => shallowEqual(a.parameters, bs[i].parameters));
}

export function equalPath(as: UrlSegment[], bs: UrlSegment[]): boolean {
    if (as.length !== bs.length) return false;
    return as.every((a, i) => a.path === bs[i].path);
}

export function mapChildrenIntoArray<T>(
    segment: UrlSegmentGroup, fn: (v: UrlSegmentGroup, k: string) => T[]): T[] {
    let res: T[] = [];
    forEach(segment.children, (child: UrlSegmentGroup, childOutlet: string) => {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, (child: UrlSegmentGroup, childOutlet: string) => {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}

export function equalQueryParams(
    container: { [k: string]: string }, containee: { [k: string]: string }): boolean {
    return shallowEqual(container, containee);
}

export function equalSegmentGroups(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean {
    if (!equalPath(container.segments, containee.segments)) return false;
    if (container.numberOfChildren !== containee.numberOfChildren) return false;
    for (const c in containee.children) {
        if (!container.children[c]) return false;
        if (!equalSegmentGroups(container.children[c], containee.children[c])) return false;
    }
    return true;
}

export function containsQueryParams(
    container: { [k: string]: string }, containee: { [k: string]: string }): boolean {
    return Object.keys(containee).length <= Object.keys(container).length &&
        Object.keys(containee).every(key => containee[key] === container[key]);
}

export function containsSegmentGroup(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean {
    return containsSegmentGroupHelper(container, containee, containee.segments);
}

export function containsSegmentGroupHelper(
    container: UrlSegmentGroup, containee: UrlSegmentGroup, containeePaths: UrlSegment[]): boolean {
    if (container.segments.length > containeePaths.length) {
        const current = container.segments.slice(0, containeePaths.length);
        if (!equalPath(current, containeePaths)) return false;
        if (containee.hasChildren()) return false;
        return true;

    } else if (container.segments.length === containeePaths.length) {
        if (!equalPath(container.segments, containeePaths)) return false;
        for (const c in containee.children) {
            if (!container.children[c]) return false;
            if (!containsSegmentGroup(container.children[c], containee.children[c])) return false;
        }
        return true;

    } else {
        const current = containeePaths.slice(0, container.segments.length);
        const next = containeePaths.slice(container.segments.length);
        if (!equalPath(container.segments, current)) return false;
        if (!container.children[PRIMARY_OUTLET]) return false;
        return containsSegmentGroupHelper(container.children[PRIMARY_OUTLET], containee, next);
    }
}

const SEGMENT_RE = /^[^\/()?;=&#]+/;
export function matchSegments(str: string): string {
    const match = str.match(SEGMENT_RE);
    console.log('matchSegments', match);
    return match ? match[0] : '';
}

const QUERY_PARAM_RE = /^[^=?&#]+/;
export function matchQueryParams(str: string): string {
    const match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}

const QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
export function matchUrlQueryParamValue(str: string): string {
    const match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}


export function serializeSegment(segment: UrlSegmentGroup, root: boolean, fn: Function): string {
    if (!segment.hasChildren()) {
        return fn(segment);
    }
    if (root) {
        const primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false, fn) : '';
        const children: string[] = [];
        forEach(segment.children, (v: UrlSegmentGroup, k: string) => {
            if (k !== PRIMARY_OUTLET) {
                children.push(`${k}:${serializeSegment(v, false, fn)}`);
            }
        });
        return children.length > 0 ? `${primary}(${children.join('//')})` : primary;
    } else {
        const children = mapChildrenIntoArray(segment, (v: UrlSegmentGroup, k: string) => {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false, fn)];
            }
            return [`${k}:${serializeSegment(v, false, fn)}`];
        });
        let str = `${fn(segment)}/(${children.join('//')})`;
        return str;
    }
}


export function serializeQueryParams(params: { [key: string]: any }): string {
    const strParams: string[] = Object.keys(params).map((name) => {
        const value = params[name];
        return Array.isArray(value) ?
            value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join('&') :
            `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
    });
    let str = strParams.length ? `?${strParams.join("&")}` : '';
    return str;
}


export function containsTree(container: UrlTree, containee: UrlTree, exact: boolean): boolean {
    if (exact) {
        return equalQueryParams(container.queryParams, containee.queryParams) &&
            equalSegmentGroups(container.root, containee.root);
    }
    return containsQueryParams(container.queryParams, containee.queryParams) &&
        containsSegmentGroup(container.root, containee.root);
}
