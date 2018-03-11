import { ParamMap, UrlSegmentGroup, UrlTree, UrlSerializer } from '@angular/router';
export declare class MobileUrlSerializer implements UrlSerializer {
    parse(url: string): MobileUrlTree;
    serialize(tree: MobileUrlTree): string;
}
export declare class MobileUrlTree extends UrlTree {
    _queryParamMap: ParamMap;
    constructor(root: UrlSegmentGroup, queryParams: {
        [key: string]: string;
    }, fragment: string | null);
    readonly queryParamMap: ParamMap;
    toString(): string;
}
