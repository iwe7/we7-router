import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

@Component({
  selector: 'app-setting',
  template: `setting-page`
})
export class AppSetting {
  title = 'app';
}

@Component({
  selector: 'app-home',
  template: `home-page`
})
export class AppHome {
  title = 'app';
}

@Component({
  selector: 'app-detail',
  template: `home-detail`
})
export class AppDetail {
  title = 'app';
  constructor(
    public route: ActivatedRoute
  ) {
    this.route.queryParams.subscribe(res => {
      console.log(res);
    });
  }
}

@Component({
  selector: 'app-children',
  template: `<router-outlet></router-outlet>`
})
export class ChildrenPage {
  title = 'app';
}