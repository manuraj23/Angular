import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingLogin } from './routing-login';

describe('RoutingLogin', () => {
  let component: RoutingLogin;
  let fixture: ComponentFixture<RoutingLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingLogin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
