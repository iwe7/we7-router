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
 * @record
 */

/**
 * @param {?} segment
 * @return {?}
 */
function isApp(segment) {
    const { segments } = segment;
    if (segments.length > 0) {
        return segments[0].path === 'app';
    }
    else {
        return false;
    }
}
/**
 * @param {?} segment
 * @return {?}
 */

/**
 * @param {?} segments
 * @return {?}
 */
function serializeAppPaths(segments) {
    let /** @type {?} */ params = {
        root: 'app/index.php',
        c: segments.length > 1 ? segments[1].path : 'home'
    };
    if (params.c === 'home') {
        return params;
    }
    else {
        params.a = segments.length > 2 ? segments[2].path : 'site';
        if (params.c === 'entry') {
            params.m = segments.length > 3 ? segments[3].path : 'we7_coupon';
            params.do = segments.length > 4 ? segments[4].path : 'list';
            params.version_id = segments.length > 5 ? segments[5].path : '1.0.0';
        }
        else {
            params.do = segments.length > 3 ? segments[3].path : 'list';
            params.version_id = segments.length > 4 ? segments[4].path : '1.0.0';
        }
        return params;
    }
}
/**
 * @param {?} segments
 * @return {?}
 */
function serializeWebPaths(segments) {
    let /** @type {?} */ params = {
        root: 'web/index.php',
        c: segments.length > 1 ? segments[1].path : 'home'
    };
    params.a = segments.length > 2 ? segments[2].path : 'welcome';
    if (params.c === 'site') {
        params.m = segments.length > 3 ? segments[3].path : 'we7_coupon';
        params.do = segments.length > 4 ? segments[4].path : 'welcome';
        params.version_id = segments.length > 5 ? segments[5].path : '1.0.0';
    }
    else if (params.c === 'platform') {
    }
    {
        params.do = segments.length > 3 ? segments[3].path : 'welcome';
        params.version_id = segments.length > 4 ? segments[4].path : '1.0.0';
    }
    return params;
}
/**
 * @param {?} segment
 * @return {?}
 */
function serializePaths(segment) {
    const { segments } = segment;
    if (isApp(segment)) {
        return serializeAppPaths(segments);
    }
    else {
        return serializeWebPaths(segments);
    }
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
function getDefaultQueryParams() {
    let /** @type {?} */ res = {};
    let /** @type {?} */ i = getQueryParams('i');
    if (i) {
        res['i'] = i;
    }
    let /** @type {?} */ j = getQueryParams('j');
    if (j) {
        res['j'] = i;
    }
    res['poverby'] = 'imeepos';
    return res;
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
    console.log('matchSegments', match);
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
    let /** @type {?} */ str = strParams.length ? `?${strParams.join("&")}` : '';
    return str;
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
        this.params = {};
        this.num = 0;
        this.remaining = url;
        this.copyUrl = url;
        // 去掉无用项目
    }
    /**
     * @return {?}
     */
    getParams() {
        return this.params;
    }
    /**
     * @return {?}
     */
    parseRootSegment() {
        this.consumeOptional('/');
        return new UrlSegmentGroup([], this.parseChildren());
    }
    /**
     * @return {?}
     */
    parseQueryParams() {
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam();
            } while (this.consumeOptional('&'));
        }
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
        let /** @type {?} */ segments = [];
        // 去掉无用项目
        this.consumeOptional('/');
        if (this.consumeOptional('app')) {
            segments.push(new UrlSegment(decode('app'), this.parseMatrixParams()));
        }
        this.consumeOptional('/');
        if (this.consumeOptional('web')) {
            segments.push(new UrlSegment(decode('web'), this.parseMatrixParams()));
        }
        this.consumeOptional('/');
        this.consumeOptional('index.php');
        // 解析url params
        this.parseQueryParams();
        // 控制器
        if (this.params['c']) {
            segments.push(new UrlSegment(decode(this.params['c']), this.parseMatrixParams()));
        }
        // 操作器
        if (this.params['a']) {
            segments.push(new UrlSegment(decode(this.params['a']), this.parseMatrixParams()));
        }
        if (this.params['m']) {
            segments.push(new UrlSegment(decode(this.params['m']), this.parseMatrixParams()));
        }
        if (this.params['do']) {
            segments.push(new UrlSegment(decode(this.params['do']), this.parseMatrixParams()));
        }
        let /** @type {?} */ children = {};
        let /** @type {?} */ ext = this.params['ext'] || '';
        let /** @type {?} */ exts = ext.split('|');
        exts.map(res => {
            if (res.length > 0) {
                segments.push(new UrlSegment(decode(res), this.parseMatrixParams()));
            }
        });
        let /** @type {?} */ res = {};
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[PRIMARY_OUTLET] = new UrlSegmentGroup(segments, children);
        }
        console.log(res);
        return res;
    }
    /**
     * @return {?}
     */
    parseWe7Segment() {
        const /** @type {?} */ path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);
        }
        this.capture(path);
        if (path === 'web' || path === 'index.php' || path === 'app') {
            return null;
        }
        else {
            return new UrlSegment(decode(path), this.parseMatrixParams());
        }
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
     * @return {?}
     */
    parseQueryParam() {
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
        if (this.params.hasOwnProperty(decodedKey)) {
            let /** @type {?} */ currentVal = this.params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                this.params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            this.params[decodedKey] = decodedVal;
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
class MeepoUrlSerializer {
    /**
     * @param {?} url
     * @return {?}
     */
    parse(url) {
        const /** @type {?} */ p = new UrlParser(url);
        let /** @type {?} */ urlTree = new WebUrlTree(p.parseRootSegment(), p.getParams(), p.parseFragment());
        return urlTree;
    }
    /**
     * @param {?} tree
     * @return {?}
     */
    serialize(tree) {
        const /** @type {?} */ segment = serializeSegment(tree.root, true, serializePaths);
        let /** @type {?} */ params = getDefaultQueryParams();
        let /** @type {?} */ treeParams = tree.queryParams;
        params = Object.assign({}, params, treeParams, segment);
        let /** @type {?} */ result = {};
        for (let /** @type {?} */ key in params) {
            if (key === 'root') { }
            else {
                result[key] = params[key];
            }
        }
        let /** @type {?} */ root = segment.root;
        const /** @type {?} */ query = serializeQueryParams(result);
        const /** @type {?} */ fragment = typeof tree.fragment === `string` ? `#${encodeUriQuery((/** @type {?} */ ((tree.fragment))))}` : '';
        let /** @type {?} */ str = `${root}${query}${fragment}`;
        return str;
    }
}
const WEB_SERIALIZER = new MeepoUrlSerializer();
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

export { MeepoUrlSerializer };
//# sourceMappingURL=we7-router.js.map
