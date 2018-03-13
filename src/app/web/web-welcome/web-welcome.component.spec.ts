import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebWelcomeComponent } from './web-welcome.component';

describe('WebWelcomeComponent', () => {
  let component: WebWelcomeComponent;
  let fixture: ComponentFixture<WebWelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebWelcomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebWelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
