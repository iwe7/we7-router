import { ParamMap, UrlSegmentGroup, UrlTree, UrlSerializer } from '@angular/router';
export declare class MobileUrlSerializer implements UrlSerializer {
    parse(url: string): WebUrlTree;
    serialize(tree: WebUrlTree): string;
}
export declare class WebUrlTree extends UrlTree {
    _queryParamMap: ParamMap;
    constructor(root: UrlSegmentGroup, queryParams: {
        [key: string]: string;
    }, fragment: string | null);
    readonly queryParamMap: ParamMap;
    toString(): string;
}
