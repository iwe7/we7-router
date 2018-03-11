import { UrlSegmentGroup } from '@angular/router';
export declare class UrlParser {
    private url;
    private remaining;
    params: {
        [key: string]: any;
    };
    private copyUrl;
    constructor(url: string);
    getParams(): {
        [key: string]: any;
    };
    parseRootSegment(): UrlSegmentGroup;
    parseQueryParams(): void;
    parseFragment(): string | null;
    num: number;
    private parseChildren();
    private parseWe7Segment();
    private parseSegment();
    private parseMatrixParams();
    private parseParam(params);
    private parseQueryParam();
    private parseParens(allowPrimary);
    private peekStartsWith(str);
    private consumeOptional(str);
    private capture(str);
}
