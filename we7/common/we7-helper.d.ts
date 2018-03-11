import { Router } from '@angular/router';
export declare class We7HelperService {
    router: Router;
    queryParams: any;
    constructor(router: Router);
    parseUrl(): void;
    get(name: string): any;
    getUrl(_do: string, _params?: any): string;
    getMobileUrl(_do: string, _params?: any): string;
    getWebUrl(_do: string, _params?: any): string;
    serializeQueryParams(params: {
        [key: string]: any;
    }): string;
    encodeUriQuery(s: string): string;
    encodeUriString(s: string): string;
}
