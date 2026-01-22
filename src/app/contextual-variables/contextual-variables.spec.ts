import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextualVariables } from './contextual-variables';

describe('ContextualVariables', () => {
  let component: ContextualVariables;
  let fixture: ComponentFixture<ContextualVariables>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContextualVariables]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextualVariables);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
