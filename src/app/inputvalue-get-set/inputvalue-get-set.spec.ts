import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputvalueGetSet } from './inputvalue-get-set';

describe('InputvalueGetSet', () => {
  let component: InputvalueGetSet;
  let fixture: ComponentFixture<InputvalueGetSet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputvalueGetSet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputvalueGetSet);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
