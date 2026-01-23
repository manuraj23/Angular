import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingPageNotFound } from './routing-page-not-found';

describe('RoutingPageNotFound', () => {
  let component: RoutingPageNotFound;
  let fixture: ComponentFixture<RoutingPageNotFound>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingPageNotFound]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingPageNotFound);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
