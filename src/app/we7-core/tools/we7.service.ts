import { Injectable } from '@angular/core';

@Injectable()
export class We7Service {
    queryParams: any = {};
    constructor() {
        this.queryParams = this.parseURL();
    }

    parseURL(): { [k: string]: string } {
        const ret = {};
        const seg = location.search.replace(/^\?/, '').split('&').filter(function (v, i) {
            if (v !== '' && v.indexOf('=')) {
                return true;
            }
        });
        seg.forEach((element, index) => {
            const idx = element.indexOf('=');
            const key = element.substring(0, idx);
            const val = element.substring(idx + 1);
            ret[key] = val;
        });
        return ret;
    }

    setQuerParams(queryParams: any) {
        this.queryParams = queryParams;
        return this;
    }

    get(name: string) {
        return this.queryParams[name];
    }

    getUrl(_params: any = {}) {
        let url = this.serializeQueryParams({ ...this.queryParams, ..._params });
        return `${url}`;
    }

    getMobileUrl(_do: string, _params: any = {}) {
        _params['a'] = 'site';
        _params['c'] = 'entry';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return `${location.protocol}//${location.host}/app/index.php${this.getUrl(_params)}`;
    }

    getWebUrl(_do: string, _params: any = {}) {
        _params['a'] = 'entry';
        _params['c'] = 'site';
        _params['i'] = this.get('i') ? this.get('i') : '2';
        _params['do'] = _do;
        return `${location.protocol}//${location.host}/web/index.php${this.getUrl(_params)}`;
    }

    serializeQueryParams(params: { [key: string]: any }): string {
        const strParams: string[] = Object.keys(params).map((name) => {
            const value = params[name];
            return Array.isArray(value) ?
                value.map(v => `${this.encodeUriQuery(name)}=${this.encodeUriQuery(v)}`).join('&') :
                `${this.encodeUriQuery(name)}=${this.encodeUriQuery(value)}`;
        });
        return strParams.length ? `?${strParams.join("&")}` : '';
    }

    encodeUriQuery(s: string): string {
        return this.encodeUriString(s).replace(/%3B/gi, ';');
    }

    encodeUriString(s: string): string {
        return encodeURIComponent(s)
            .replace(/%40/g, '@')
            .replace(/%3A/gi, ':')
            .replace(/%24/g, '$')
            .replace(/%2C/gi, ',');
    }
}