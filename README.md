# 安装
```ts
yarn add we7-router
```

# 使用
```ts
import { MeepoUrlSerializer } from 'we7-router';
@NgModule({
  ...
  providers: [{
    provide: UrlSerializer,
    useClass: MeepoUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# 参数
- app/web 一级路由
- m 二级路由
- do 三级路由
- ext 大于四级路由 somerouter|somerouter
