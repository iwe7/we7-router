import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuService, SettingsService, TitleService } from '@delon/theme';
import { ACLService } from '@delon/acl';
import { ITokenService } from '@delon/auth';
import { We7Service } from '../tools/we7.service';
export declare class StartupService {
    private menuService;
    private settingService;
    private aclService;
    private titleService;
    private tokenService;
    private httpClient;
    private injector;
    private we7;
    constructor(menuService: MenuService, settingService: SettingsService, aclService: ACLService, titleService: TitleService, tokenService: ITokenService, httpClient: HttpClient, injector: Injector, we7: We7Service);
    load(): void;
}
