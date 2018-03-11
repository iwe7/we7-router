import { UrlSegmentGroup } from '@angular/router';
export declare class UrlParser {
    private url;
    private remaining;
    constructor(url: string);
    parseRootSegment(): UrlSegmentGroup;
    parseQueryParams(): {
        [key: string]: any;
    };
    parseFragment(): string | null;
    num: number;
    private parseChildren();
    private parseSegment();
    private parseMatrixParams();
    private parseParam(params);
    private parseQueryParam(params);
    private parseParens(allowPrimary);
    private peekStartsWith(str);
    private consumeOptional(str);
    private capture(str);
}
