import { Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpSentEvent, HttpHeaderResponse, HttpProgressEvent, HttpResponse, HttpUserEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NzMessageService } from 'ng-zorro-antd';
/**
 * 默认HTTP拦截器，其注册细节见 `app.module.ts`
 */
export declare class DefaultInterceptor implements HttpInterceptor {
    private injector;
    constructor(injector: Injector);
    readonly msg: NzMessageService;
    private goTo(url);
    private handleData(event);
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>>;
}
