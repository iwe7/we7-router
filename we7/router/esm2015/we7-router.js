import '@angular/core';
import 'rxjs/observable/fromPromise';
import 'rxjs/observable/of';
import 'rxjs/operator/concatAll';
import 'rxjs/operator/every';
import 'rxjs/operator/last';
import 'rxjs/operator/map';
import 'rxjs/operator/mergeAll';
import { PRIMARY_OUTLET, UrlSegmentGroup, UrlSegment, convertToParamMap, UrlTree } from '@angular/router';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */

/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */

/**
 * @template T
 * @param {?} arr
 * @return {?}
 */

/**
 * @template T
 * @param {?} a
 * @return {?}
 */

/**
 * @param {?} bools
 * @return {?}
 */

/**
 * @template K, V
 * @param {?} map
 * @param {?} callback
 * @return {?}
 */
function forEach(map, callback) {
    for (const /** @type {?} */ prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}
/**
 * @template A, B
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */

/**
 * @param {?} observables
 * @return {?}
 */

/**
 * @template T
 * @param {?} value
 * @return {?}
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} segment
 * @return {?}
 */
function serializeMobilePaths(segment) {
    let /** @type {?} */ i = getQueryParams('i');
    let /** @type {?} */ m = getQueryParams('m');
    let /** @type {?} */ str = `app/index.php?i=${i ? i : '2'}&c=entry&m=${m ? m : 'imeepos_runner'}`;
    if (segment.segments.length > 0) {
        console.log(segment.segments);
        let /** @type {?} */ p = segment.segments[segment.segments.length - 1];
        str += '&do=' + p.path;
    }
    return str;
}
/**
 * @param {?} segment
 * @return {?}
 */
function serializeWebPaths(segment) {
    let /** @type {?} */ m = getQueryParams('m');
    let /** @type {?} */ i = getQueryParams('i');
    let /** @type {?} */ str = `web/index.php?c=site&a=entry&i=${i ? i : '2'}&m=${m ? m : 'imeepos_runner'}`;
    if (segment.segments.length > 0) {
        console.log(segment.segments);
        let /** @type {?} */ p = segment.segments[segment.segments.length - 1];
        str += '&do=' + p.path;
    }
    return str;
}
/**
 * @param {?} name
 * @return {?}
 */
function getQueryParams(name) {
    let /** @type {?} */ url = parseURL();
    return url[name];
}
/**
 * @return {?}
 */
function parseURL() {
    const /** @type {?} */ ret = {};
    const /** @type {?} */ seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
            return true;
        }
    });
    seg.forEach((element, index) => {
        const /** @type {?} */ idx = element.indexOf('=');
        const /** @type {?} */ key = element.substring(0, idx);
        const /** @type {?} */ val = element.substring(idx + 1);
        ret[key] = val;
    });
    return ret;
}
/**
 * @param {?} s
 * @return {?}
 */
function encodeUriQuery(s) {
    return encodeUriString(s).replace(/%3B/gi, ';');
}
/**
 * @param {?} s
 * @return {?}
 */

/**
 * @param {?} s
 * @return {?}
 */
function decode(s) {
    return decodeURIComponent(s);
}
/**
 * @param {?} s
 * @return {?}
 */
function decodeQuery(s) {
    return decode(s.replace(/\+/g, '%20'));
}
/**
 * @param {?} path
 * @return {?}
 */

/**
 * @param {?} s
 * @return {?}
 */
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}
/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */

/**
 * @param {?} as
 * @param {?} bs
 * @return {?}
 */

/**
 * @template T
 * @param {?} segment
 * @param {?} fn
 * @return {?}
 */
function mapChildrenIntoArray(segment, fn) {
    let /** @type {?} */ res = [];
    forEach(segment.children, (child, childOutlet) => {
        if (childOutlet === PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, (child, childOutlet) => {
        if (childOutlet !== PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */

/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */

/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */

/**
 * @param {?} container
 * @param {?} containee
 * @return {?}
 */

/**
 * @param {?} container
 * @param {?} containee
 * @param {?} containeePaths
 * @return {?}
 */

const SEGMENT_RE = /^[^\/()?;=&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchSegments(str) {
    const /** @type {?} */ match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
const QUERY_PARAM_RE = /^[^=?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchQueryParams(str) {
    const /** @type {?} */ match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
const QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
/**
 * @param {?} str
 * @return {?}
 */
function matchUrlQueryParamValue(str) {
    const /** @type {?} */ match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
/**
 * @param {?} segment
 * @param {?} root
 * @param {?} fn
 * @return {?}
 */
function serializeSegment(segment, root, fn) {
    if (!segment.hasChildren()) {
        return fn(segment);
    }
    if (root) {
        const /** @type {?} */ primary = segment.children[PRIMARY_OUTLET] ?
            serializeSegment(segment.children[PRIMARY_OUTLET], false, fn) : '';
        const /** @type {?} */ children = [];
        forEach(segment.children, (v, k) => {
            if (k !== PRIMARY_OUTLET) {
                children.push(`${k}:${serializeSegment(v, false, fn)}`);
            }
        });
        return children.length > 0 ? `${primary}(${children.join('//')})` : primary;
    }
    else {
        const /** @type {?} */ children = mapChildrenIntoArray(segment, (v, k) => {
            if (k === PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[PRIMARY_OUTLET], false, fn)];
            }
            return [`${k}:${serializeSegment(v, false, fn)}`];
        });
        let /** @type {?} */ str = `${fn(segment)}/(${children.join('//')})`;
        return str;
    }
}
/**
 * @param {?} params
 * @return {?}
 */
function serializeQueryParams(params) {
    const /** @type {?} */ strParams = Object.keys(params).map((name) => {
        const /** @type {?} */ value = params[name];
        return Array.isArray(value) ?
            value.map(v => `${encodeUriQuery(name)}=${encodeUriQuery(v)}`).join('&') :
            `${encodeUriQuery(name)}=${encodeUriQuery(value)}`;
    });
    return strParams.length ? `&${strParams.join("&")}` : '';
}
/**
 * @param {?} container
 * @param {?} containee
 * @param {?} exact
 * @return {?}
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UrlParser {
    /**
     * @param {?} url
     */
    constructor(url) {
        this.url = url;
        this.num = 0;
        this.remaining = url;
    }
    /**
     * @return {?}
     */
    parseRootSegment() {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new UrlSegmentGroup([], {});
        }
        return new UrlSegmentGroup([], this.parseChildren());
    }
    /**
     * @return {?}
     */
    parseQueryParams() {
        const /** @type {?} */ params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    }
    /**
     * @return {?}
     */
    parseFragment() {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    }
    /**
     * @return {?}
     */
    parseChildren() {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        let /** @type {?} */ segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        let /** @type {?} */ children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        let /** @type {?} */ res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        let /** @type {?} */ params = this.parseQueryParams();
        // 如果有do=*** 添加一个segments
        if (params["do"]) {
            segments.push(new UrlSegment(params["do"], {}));
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
    /**
     * @return {?}
     */
    parseSegment() {
        const /** @type {?} */ path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        return new UrlSegment(decode(path), this.parseMatrixParams());
    }
    /**
     * @return {?}
     */
    parseMatrixParams() {
        const /** @type {?} */ params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseParam(params) {
        const /** @type {?} */ key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let /** @type {?} */ value = '';
        if (this.consumeOptional('=')) {
            const /** @type {?} */ valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    }
    /**
     * @param {?} params
     * @return {?}
     */
    parseQueryParam(params) {
        const /** @type {?} */ key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        let /** @type {?} */ value = '';
        if (this.consumeOptional('=')) {
            const /** @type {?} */ valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        const /** @type {?} */ decodedKey = decodeQuery(key);
        const /** @type {?} */ decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            let /** @type {?} */ currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            params[decodedKey] = decodedVal;
        }
    }
    /**
     * @param {?} allowPrimary
     * @return {?}
     */
    parseParens(allowPrimary) {
        const /** @type {?} */ segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            const /** @type {?} */ path = matchSegments(this.remaining);
            const /** @type {?} */ next = this.remaining[path.length];
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error(`Cannot parse url '${this.url}'`);
            }
            let /** @type {?} */ outletName = /** @type {?} */ ((undefined));
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = PRIMARY_OUTLET;
            }
            const /** @type {?} */ children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[PRIMARY_OUTLET] :
                new UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    peekStartsWith(str) {
        return this.remaining.startsWith(str);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    consumeOptional(str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    }
    /**
     * @param {?} str
     * @return {?}
     */
    capture(str) {
        if (!this.consumeOptional(str)) {
            throw new Error(`Expected "${str}".`);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MobileUrlSerializer {
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        const /** @type {?} */ p = new UrlParser(url);
        let /** @type {?} */ urlTree = new MobileUrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        return urlTree;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        const /** @type {?} */ segment = `/${serializeSegment(tree.root, true, serializeMobilePaths)}`;
        const /** @type {?} */ query = serializeQueryParams(tree.queryParams);
        const /** @type {?} */ fragment = typeof tree.fragment === `string` ? `#${encodeUriQuery((/** @type {?} */ ((tree.fragment))))}` : '';
        let /** @type {?} */ str = `${segment}${query}${fragment}`;
        return str;
    }
}
const MOBILE_SERIALIZER = new MobileUrlSerializer();
class MobileUrlTree extends UrlTree {
    /**
     * @param {?} root
     * @param {?} queryParams
     * @param {?} fragment
     */
    constructor(root, queryParams, fragment) {
        super();
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    /**
     * @return {?}
     */
    get queryParamMap() {
        if (!this._queryParamMap) {
            this._queryParamMap = convertToParamMap(this.queryParams);
        }
        return this._queryParamMap;
    }
    /**
     * @return {?}
     */
    toString() { return MOBILE_SERIALIZER.serialize(this); }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WebUrlSerializer {
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        const /** @type {?} */ p = new UrlParser(url);
        let /** @type {?} */ urlTree = new WebUrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        return urlTree;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        const /** @type {?} */ segment = `/${serializeSegment(tree.root, true, serializeWebPaths)}`;
        const /** @type {?} */ query = serializeQueryParams(tree.queryParams);
        const /** @type {?} */ fragment = typeof tree.fragment === `string` ? `#${encodeUriQuery((/** @type {?} */ ((tree.fragment))))}` : '';
        let /** @type {?} */ str = `${segment}${query}${fragment}`;
        return str;
    }
}
const WEB_SERIALIZER = new WebUrlSerializer();
class WebUrlTree extends UrlTree {
    /**
     * @param {?} root
     * @param {?} queryParams
     * @param {?} fragment
     */
    constructor(root, queryParams, fragment) {
        super();
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    /**
     * @return {?}
     */
    get queryParamMap() {
        if (!this._queryParamMap) {
            this._queryParamMap = convertToParamMap(this.queryParams);
        }
        return this._queryParamMap;
    }
    /**
     * @return {?}
     */
    toString() { return WEB_SERIALIZER.serialize(this); }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MobileUrlSerializer, WebUrlSerializer };
//# sourceMappingURL=we7-router.js.map
