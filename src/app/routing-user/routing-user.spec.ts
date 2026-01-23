import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingUser } from './routing-user';

describe('RoutingUser', () => {
  let component: RoutingUser;
  let fixture: ComponentFixture<RoutingUser>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingUser]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingUser);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
