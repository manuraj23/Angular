import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingHeader } from './routing-header';

describe('RoutingHeader', () => {
  let component: RoutingHeader;
  let fixture: ComponentFixture<RoutingHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
