import { UrlSegmentGroup, UrlSegment, UrlTree } from '@angular/router';
export declare function serializeMobilePaths(segment: UrlSegmentGroup): string;
export declare function serializeWebPaths(segment: UrlSegmentGroup): string;
export declare function parseURL(): {
    [k: string]: string;
};
export declare function encodeUriQuery(s: string): string;
export declare function encodeUriSegment(s: string): string;
export declare function decode(s: string): string;
export declare function decodeQuery(s: string): string;
export declare function serializePath(path: UrlSegment): string;
export declare function equalSegments(as: UrlSegment[], bs: UrlSegment[]): boolean;
export declare function equalPath(as: UrlSegment[], bs: UrlSegment[]): boolean;
export declare function mapChildrenIntoArray<T>(segment: UrlSegmentGroup, fn: (v: UrlSegmentGroup, k: string) => T[]): T[];
export declare function equalQueryParams(container: {
    [k: string]: string;
}, containee: {
    [k: string]: string;
}): boolean;
export declare function equalSegmentGroups(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean;
export declare function containsQueryParams(container: {
    [k: string]: string;
}, containee: {
    [k: string]: string;
}): boolean;
export declare function containsSegmentGroup(container: UrlSegmentGroup, containee: UrlSegmentGroup): boolean;
export declare function containsSegmentGroupHelper(container: UrlSegmentGroup, containee: UrlSegmentGroup, containeePaths: UrlSegment[]): boolean;
export declare function matchSegments(str: string): string;
export declare function matchQueryParams(str: string): string;
export declare function matchUrlQueryParamValue(str: string): string;
export declare function serializeSegment(segment: UrlSegmentGroup, root: boolean, fn: Function): string;
export declare function serializeQueryParams(params: {
    [key: string]: any;
}): string;
export declare function containsTree(container: UrlTree, containee: UrlTree, exact: boolean): boolean;
