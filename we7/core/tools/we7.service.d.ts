export declare class We7Service {
    queryParams: any;
    constructor();
    parseURL(): {
        [k: string]: string;
    };
    setQuerParams(queryParams: any): this;
    get(name: string): any;
    getUrl(_params?: any): string;
    getMobileUrl(_do: string, _params?: any): string;
    getWebUrl(_do: string, _params?: any): string;
    serializeQueryParams(params: {
        [key: string]: any;
    }): string;
    encodeUriQuery(s: string): string;
    encodeUriString(s: string): string;
}
