import { PRIMARY_OUTLET, ParamMap, convertToParamMap, UrlSegmentGroup, UrlSegment, UrlTree, UrlSerializer } from '@angular/router';
import { forEach, shallowEqual } from './collection';
import { serializePath, getDefaultQueryParams } from './common';
import {
    serializePaths,
    mapChildrenIntoArray,
    equalQueryParams,
    equalSegmentGroups,
    containsQueryParams,
    containsSegmentGroup,
    matchSegments,
    matchQueryParams,
    decode,
    decodeQuery,
    matchUrlQueryParamValue,
    serializeSegment,
    serializeQueryParams,
} from './common';
import { encodeUriQuery } from './common';
import { UrlParser } from './url-parser';

export class MeepoUrlSerializer implements UrlSerializer {
    parse(url: string): WebUrlTree {
        const p = new UrlParser(url);
        let urlTree = new WebUrlTree(p.parseRootSegment(), p.getParams(), p.parseFragment());
        return urlTree;
    }
    serialize(tree: WebUrlTree): string {
        const segment: any = serializeSegment(tree.root, true, serializePaths);
        let params = getDefaultQueryParams();
        let treeParams = tree.queryParams;
        params = { ...params, ...treeParams, ...segment };
        let result = {};
        for (let key in params) {
            if (key === 'root') { } else {
                result[key] = params[key];
            }
        }
        let root = segment.root;
        const query = serializeQueryParams(result);
        const fragment = typeof tree.fragment === `string` ? `#${encodeUriQuery(tree.fragment!)}` : '';
        let str = `${root}${query}${fragment}`;
        return str;
    }
}

const WEB_SERIALIZER = new MeepoUrlSerializer();

export class WebUrlTree extends UrlTree {
    _queryParamMap: ParamMap;
    constructor(
        root: UrlSegmentGroup,
        queryParams: { [key: string]: string },
        fragment: string | null
    ) {
        super();
        this.root = root;
        this.queryParams = queryParams;
        this.fragment = fragment;
    }
    get queryParamMap(): ParamMap {
        if (!this._queryParamMap) {
            this._queryParamMap = convertToParamMap(this.queryParams);
        }
        return this._queryParamMap;
    }
    toString(): string { return WEB_SERIALIZER.serialize(this); }
}
