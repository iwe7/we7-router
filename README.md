# mobile端
```ts
import { MobileUrlSerializer } from 'we7-router';
@NgModule({
  ...
  providers: [{
    provide: UrlSerializer,
    useClass: MobileUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
```
# web端
```ts
import { WebUrlSerializer } from 'we7-router';
@NgModule({
  ...
  providers: [{
    provide: UrlSerializer,
    useClass: WebUrlSerializer
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

# 参数
- do 一级路由
- ext 二级路由
