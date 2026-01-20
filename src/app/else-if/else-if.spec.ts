import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElseIf } from './else-if';

describe('ElseIf', () => {
  let component: ElseIf;
  let fixture: ComponentFixture<ElseIf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElseIf]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElseIf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
