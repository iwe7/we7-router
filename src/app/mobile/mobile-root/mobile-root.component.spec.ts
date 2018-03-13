import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileRootComponent } from './mobile-root.component';

describe('MobileRootComponent', () => {
  let component: MobileRootComponent;
  let fixture: ComponentFixture<MobileRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
