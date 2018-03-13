import { UrlSegmentGroup, UrlSegment, PRIMARY_OUTLET, ParamMap, convertToParamMap, DefaultUrlSerializer, UrlTree } from '@angular/router';
import { forEach, shallowEqual } from './collection';

// mobile app/c/a/m/do/v
// web web/c/a/m/do/v
export interface We7Params {
    root?: string;
    c?: string;
    a?: string;
    do?: string;
    m?: string;
    ext?: string;
    eid?: string;
    i?: string;
    version_id?: string;
    t?: string;
    j?: string;
}

export function isApp(segment: UrlSegmentGroup): boolean {
    const { segments } = segment;
    if (segments.length > 0) {
        return segments[0].path === 'app';
    } else {
        return false;
    }
}

export function isWeb(segment: UrlSegmentGroup): boolean {
    const { segments } = segment;
    if (segments.length > 0) {
        return segments[0].path === 'web';
    } else {
        return false;
    }
}

// 如果是app 

export function serializeAppPaths(segments: UrlSegment[]): We7Params {
    let params: We7Params = {
        root: 'app/index.php',
        c: segments.length > 1 ? segments[1].path : 'home'
    };
    if (params.c === 'home') {
        return params;
    } else {
        params.a = segments.length > 2 ? segments[2].path : 'site';
        if (params.c === 'entry') {
            params.m = segments.length > 3 ? segments[3].path : 'we7_coupon';
            params.do = segments.length > 4 ? segments[4].path : 'list';
            params.version_id = segments.length > 5 ? segments[5].path : '1.0.0';
        } else {
            params.do = segments.length > 3 ? segments[3].path : 'list';
            params.version_id = segments.length > 4 ? segments[4].path : '1.0.0';
        }
        return params;
    }
}

export function serializeWebPaths(segments: UrlSegment[]): We7Params {
    let params: We7Params = {
        root: 'web/index.php',
        c: segments.length > 1 ? segments[1].path : 'site'
    };
    params.a = segments.length > 2 ? segments[2].path : 'entry';
    if (params.c === 'site') {
        params.m = segments.length > 3 ? segments[3].path : 'we7_router';
        params.do = segments.length > 4 ? segments[4].path : 'index';
        params.version_id = segments.length > 5 ? segments[5].path : '1.0.0';
    } else if (params.c === 'platform') {

    } else {
        params.do = segments.length > 3 ? segments[3].path : 'welcome';
        params.version_id = segments.length > 4 ? segments[4].path : '1.0.0';
    }
    return params;
}

export function serializePaths(segment: UrlSegmentGroup): We7Params {
    const { segments } = segment;
    if (isApp(segment)) {
        return serializeAppPaths(segments);
    } else {
        return serializeWebPaths(segments);
    }
}

function getQueryParams(name: string) {
    let url = parseURL();
    return url[name];
}

export function getDefaultQueryParams() {
    let res = {};
    let i = getQueryParams('i');
    if (i) {
        res['i'] = i;
    }
    let j = getQueryParams('j');
    if (j) {
        res['j'] = i;
    }
    res['poverby'] = 'imeepos';
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
