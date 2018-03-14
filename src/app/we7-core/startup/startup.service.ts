import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { zip } from 'rxjs/observable/zip';
import { catchError } from 'rxjs/operators';
import { MenuService, SettingsService, TitleService } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { ITokenService, DA_SERVICE_TOKEN } from '@delon/auth';
import { We7Service } from '../tools/we7.service';

@Injectable()
export class StartupService {
    constructor(
        private menuService: MenuService,
        private settingService: SettingsService,
        private aclService: ACLService,
        private titleService: TitleService,
        @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
        private httpClient: HttpClient,
        private injector: Injector,
        private we7: We7Service
    ) {

    }

    load() {
        let url = this.we7.getWebUrl('open', { open: 'appconfig' })
        this.httpClient.get(url).subscribe(res => {
            console.log(res);
        });
    }
}