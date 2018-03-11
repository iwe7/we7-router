(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/observable/fromPromise'), require('rxjs/observable/of'), require('rxjs/operator/concatAll'), require('rxjs/operator/every'), require('rxjs/operator/last'), require('rxjs/operator/map'), require('rxjs/operator/mergeAll'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/observable/fromPromise', 'rxjs/observable/of', 'rxjs/operator/concatAll', 'rxjs/operator/every', 'rxjs/operator/last', 'rxjs/operator/map', 'rxjs/operator/mergeAll', '@angular/router'], factory) :
	(factory((global['we7-router'] = {}),global.ng.core,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.ng.router));
}(this, (function (exports,core,fromPromise,of,concatAll,every,last,map,mergeAll,router) { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */
var extendStatics = Object.setPrototypeOf ||
    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
    function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function forEach(map$$1, callback) {
    for (var prop in map$$1) {
        if (map$$1.hasOwnProperty(prop)) {
            callback(map$$1[prop], prop);
        }
    }
}
function serializeMobilePaths(segment) {
    var i = getQueryParams('i');
    var m = getQueryParams('m');
    var str = "app/index.php?i=" + (i ? i : '2') + "&c=entry&m=" + (m ? m : 'imeepos_runner');
    if (segment.segments.length > 0) {
        console.log(segment.segments);
        var p = segment.segments[segment.segments.length - 1];
        str += '&do=' + p.path;
    }
    return str;
}
function serializeWebPaths(segment) {
    var m = getQueryParams('m');
    var i = getQueryParams('i');
    var str = "web/index.php?c=site&a=entry&i=" + (i ? i : '2') + "&m=" + (m ? m : 'imeepos_runner');
    if (segment.segments.length > 0) {
        console.log(segment.segments);
        var p = segment.segments[segment.segments.length - 1];
        str += '&do=' + p.path;
    }
    return str;
}
function getQueryParams(name) {
    var url = parseURL();
    return url[name];
}
function parseURL() {
    var ret = {};
    var seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
        if (v !== '' && v.indexOf('=')) {
            return true;
        }
    });
    seg.forEach(function (element, index) {
        var idx = element.indexOf('=');
        var key = element.substring(0, idx);
        var val = element.substring(idx + 1);
        ret[key] = val;
    });
    return ret;
}
function encodeUriQuery(s) {
    return encodeUriString(s).replace(/%3B/gi, ';');
}
function decode(s) {
    return decodeURIComponent(s);
}
function decodeQuery(s) {
    return decode(s.replace(/\+/g, '%20'));
}
function encodeUriString(s) {
    return encodeURIComponent(s)
        .replace(/%40/g, '@')
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',');
}
function mapChildrenIntoArray(segment, fn) {
    var res = [];
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet === router.PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    forEach(segment.children, function (child, childOutlet) {
        if (childOutlet !== router.PRIMARY_OUTLET) {
            res = res.concat(fn(child, childOutlet));
        }
    });
    return res;
}
var SEGMENT_RE = /^[^\/()?;=&#]+/;
function matchSegments(str) {
    var match = str.match(SEGMENT_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_RE = /^[^=?&#]+/;
function matchQueryParams(str) {
    var match = str.match(QUERY_PARAM_RE);
    return match ? match[0] : '';
}
var QUERY_PARAM_VALUE_RE = /^[^?&#]+/;
function matchUrlQueryParamValue(str) {
    var match = str.match(QUERY_PARAM_VALUE_RE);
    return match ? match[0] : '';
}
function serializeSegment(segment, root, fn) {
    if (!segment.hasChildren()) {
        return fn(segment);
    }
    if (root) {
        var primary = segment.children[router.PRIMARY_OUTLET] ?
            serializeSegment(segment.children[router.PRIMARY_OUTLET], false, fn) : '';
        var children_1 = [];
        forEach(segment.children, function (v, k) {
            if (k !== router.PRIMARY_OUTLET) {
                children_1.push(k + ":" + serializeSegment(v, false, fn));
            }
        });
        return children_1.length > 0 ? primary + "(" + children_1.join('//') + ")" : primary;
    }
    else {
        var children = mapChildrenIntoArray(segment, function (v, k) {
            if (k === router.PRIMARY_OUTLET) {
                return [serializeSegment(segment.children[router.PRIMARY_OUTLET], false, fn)];
            }
            return [k + ":" + serializeSegment(v, false, fn)];
        });
        var str = fn(segment) + "/(" + children.join('//') + ")";
        return str;
    }
}
function serializeQueryParams(params) {
    var strParams = Object.keys(params).map(function (name) {
        var value = params[name];
        return Array.isArray(value) ?
            value.map(function (v) { return encodeUriQuery(name) + "=" + encodeUriQuery(v); }).join('&') :
            encodeUriQuery(name) + "=" + encodeUriQuery(value);
    });
    return strParams.length ? "&" + strParams.join("&") : '';
}
var UrlParser = /** @class */ (function () {
    function UrlParser(url) {
        this.url = url;
        this.num = 0;
        this.remaining = url;
    }
    UrlParser.prototype.parseRootSegment = function () {
        this.consumeOptional('/');
        if (this.remaining === '' || this.peekStartsWith('?') || this.peekStartsWith('#')) {
            return new router.UrlSegmentGroup([], {});
        }
        return new router.UrlSegmentGroup([], this.parseChildren());
    };
    UrlParser.prototype.parseQueryParams = function () {
        var params = {};
        if (this.consumeOptional('?')) {
            do {
                this.parseQueryParam(params);
            } while (this.consumeOptional('&'));
        }
        return params;
    };
    UrlParser.prototype.parseFragment = function () {
        return this.consumeOptional('#') ? decodeURIComponent(this.remaining) : null;
    };
    UrlParser.prototype.parseChildren = function () {
        if (this.remaining === '') {
            return {};
        }
        this.consumeOptional('/');
        var segments = [];
        if (!this.peekStartsWith('(')) {
            segments.push(this.parseSegment());
        }
        while (this.peekStartsWith('/') && !this.peekStartsWith('//') && !this.peekStartsWith('/(')) {
            this.capture('/');
            segments.push(this.parseSegment());
        }
        var children = {};
        if (this.peekStartsWith('/(')) {
            this.capture('/');
            children = this.parseParens(true);
        }
        var res = {};
        if (this.peekStartsWith('(')) {
            res = this.parseParens(false);
        }
        var params = this.parseQueryParams();
        if (params["do"]) {
            segments.push(new router.UrlSegment(params["do"], {}));
        }
        if (segments.length > 1) {
            segments = [segments[segments.length - 1]];
        }
        if (segments.length > 0 || Object.keys(children).length > 0) {
            res[router.PRIMARY_OUTLET] = new router.UrlSegmentGroup(segments, children);
        }
        return res;
    };
    UrlParser.prototype.parseSegment = function () {
        var path = matchSegments(this.remaining);
        if (path === '' && this.peekStartsWith(';')) {
            throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
        }
        this.capture(path);
        return new router.UrlSegment(decode(path), this.parseMatrixParams());
    };
    UrlParser.prototype.parseMatrixParams = function () {
        var params = {};
        while (this.consumeOptional(';')) {
            this.parseParam(params);
        }
        return params;
    };
    UrlParser.prototype.parseParam = function (params) {
        var key = matchSegments(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchSegments(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        params[decode(key)] = decode(value);
    };
    UrlParser.prototype.parseQueryParam = function (params) {
        var key = matchQueryParams(this.remaining);
        if (!key) {
            return;
        }
        this.capture(key);
        var value = '';
        if (this.consumeOptional('=')) {
            var valueMatch = matchUrlQueryParamValue(this.remaining);
            if (valueMatch) {
                value = valueMatch;
                this.capture(value);
            }
        }
        var decodedKey = decodeQuery(key);
        var decodedVal = decodeQuery(value);
        if (params.hasOwnProperty(decodedKey)) {
            var currentVal = params[decodedKey];
            if (!Array.isArray(currentVal)) {
                currentVal = [currentVal];
                params[decodedKey] = currentVal;
            }
            currentVal.push(decodedVal);
        }
        else {
            params[decodedKey] = decodedVal;
        }
    };
    UrlParser.prototype.parseParens = function (allowPrimary) {
        var segments = {};
        this.capture('(');
        while (!this.consumeOptional(')') && this.remaining.length > 0) {
            var path = matchSegments(this.remaining);
            var next = this.remaining[path.length];
            if (next !== '/' && next !== ')' && next !== ';') {
                throw new Error("Cannot parse url '" + this.url + "'");
            }
            var outletName = ((undefined));
            if (path.indexOf(':') > -1) {
                outletName = path.substr(0, path.indexOf(':'));
                this.capture(outletName);
                this.capture(':');
            }
            else if (allowPrimary) {
                outletName = router.PRIMARY_OUTLET;
            }
            var children = this.parseChildren();
            segments[outletName] = Object.keys(children).length === 1 ? children[router.PRIMARY_OUTLET] :
                new router.UrlSegmentGroup([], children);
            this.consumeOptional('//');
        }
        return segments;
    };
    UrlParser.prototype.peekStartsWith = function (str) {
        return this.remaining.startsWith(str);
    };
    UrlParser.prototype.consumeOptional = function (str) {
        if (this.peekStartsWith(str)) {
            this.remaining = this.remaining.substring(str.length);
            return true;
        }
        return false;
    };
    UrlParser.prototype.capture = function (str) {
        if (!this.consumeOptional(str)) {
            throw new Error("Expected \"" + str + "\".");
        }
    };
    return UrlParser;
}());
var MobileUrlSerializer = /** @class */ (function () {
    function MobileUrlSerializer() {
    }
    MobileUrlSerializer.prototype.parse = function (url) {
        var p = new UrlParser(url);
        var urlTree = new MobileUrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        return urlTree;
    };
    MobileUrlSerializer.prototype.serialize = function (tree) {
        var segment = "/" + serializeSegment(tree.root, true, serializeMobilePaths);
        var query = serializeQueryParams(tree.queryParams);
        var fragment = typeof tree.fragment === "string" ? "#" + encodeUriQuery((((tree.fragment)))) : '';
        var str = "" + segment + query + fragment;
        return str;
    };
    return MobileUrlSerializer;
}());
var MOBILE_SERIALIZER = new MobileUrlSerializer();
var MobileUrlTree = /** @class */ (function (_super) {
    __extends(MobileUrlTree, _super);
    function MobileUrlTree(root, queryParams, fragment) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.queryParams = queryParams;
        _this.fragment = fragment;
        return _this;
    }
    Object.defineProperty(MobileUrlTree.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = router.convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    MobileUrlTree.prototype.toString = function () { return MOBILE_SERIALIZER.serialize(this); };
    return MobileUrlTree;
}(router.UrlTree));
var WebUrlSerializer = /** @class */ (function () {
    function WebUrlSerializer() {
    }
    WebUrlSerializer.prototype.parse = function (url) {
        var p = new UrlParser(url);
        var urlTree = new WebUrlTree(p.parseRootSegment(), p.parseQueryParams(), p.parseFragment());
        return urlTree;
    };
    WebUrlSerializer.prototype.serialize = function (tree) {
        var segment = "/" + serializeSegment(tree.root, true, serializeWebPaths);
        var query = serializeQueryParams(tree.queryParams);
        var fragment = typeof tree.fragment === "string" ? "#" + encodeUriQuery((((tree.fragment)))) : '';
        var str = "" + segment + query + fragment;
        return str;
    };
    return WebUrlSerializer;
}());
var WEB_SERIALIZER = new WebUrlSerializer();
var WebUrlTree = /** @class */ (function (_super) {
    __extends(WebUrlTree, _super);
    function WebUrlTree(root, queryParams, fragment) {
        var _this = _super.call(this) || this;
        _this.root = root;
        _this.queryParams = queryParams;
        _this.fragment = fragment;
        return _this;
    }
    Object.defineProperty(WebUrlTree.prototype, "queryParamMap", {
        get: function () {
            if (!this._queryParamMap) {
                this._queryParamMap = router.convertToParamMap(this.queryParams);
            }
            return this._queryParamMap;
        },
        enumerable: true,
        configurable: true
    });
    WebUrlTree.prototype.toString = function () { return WEB_SERIALIZER.serialize(this); };
    return WebUrlTree;
}(router.UrlTree));
var We7MobileRouterModule = /** @class */ (function () {
    function We7MobileRouterModule() {
    }
    We7MobileRouterModule.forRoot = function () {
        return {
            ngModule: We7MobileRouterModule,
            providers: [
                {
                    provide: router.UrlSerializer,
                    useClass: MobileUrlSerializer
                }
            ]
        };
    };
    return We7MobileRouterModule;
}());
We7MobileRouterModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
We7MobileRouterModule.ctorParameters = function () { return []; };
var We7WebRouterModule = /** @class */ (function () {
    function We7WebRouterModule() {
    }
    We7WebRouterModule.forRoot = function () {
        return {
            ngModule: We7WebRouterModule,
            providers: [
                {
                    provide: router.UrlSerializer,
                    useClass: WebUrlSerializer
                }
            ]
        };
    };
    return We7WebRouterModule;
}());
We7WebRouterModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
We7WebRouterModule.ctorParameters = function () { return []; };

exports.MobileUrlSerializer = MobileUrlSerializer;
exports.WebUrlSerializer = WebUrlSerializer;
exports.We7MobileRouterModule = We7MobileRouterModule;
exports.We7WebRouterModule = We7WebRouterModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=we7-router.umd.js.map
