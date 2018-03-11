import { PRIMARY_OUTLET, ParamMap, convertToParamMap, UrlSegmentGroup, UrlSegment, UrlTree, UrlSerializer } from '@angular/router';
import { forEach, shallowEqual } from './collection';
import { serializePath } from './common';
import {
    serializeWebPaths,
    serializeMobilePaths,
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
    serializeQueryParams
} from './common';
import { encodeUriQuery } from './common';
import { UrlParser } from './url-parser';

export class MobileUrlSerializer implements UrlSerializer {
    parse(url: string): MobileUrlTree {
        const p = new UrlParser('/'+url);
        let urlTree = new MobileUrlTree(p.parseRootSegment(), p.getParams(), p.parseFragment());
        return urlTree;
    }
    serialize(tree: MobileUrlTree): string {
        const segment = `/${serializeSegment(tree.root, true, serializeMobilePaths)}`;
        const query = serializeQueryParams(tree.queryParams);
        const fragment = typeof tree.fragment === `string` ? `#${encodeUriQuery(tree.fragment!)}` : '';
        let str = `${segment}${query}${fragment}`;
        return str;
    }
}

const MOBILE_SERIALIZER = new MobileUrlSerializer();

export class MobileUrlTree extends UrlTree {
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
    toString(): string { return MOBILE_SERIALIZER.serialize(this); }
}
