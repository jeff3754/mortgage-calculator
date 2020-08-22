import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MortgageCalculatorFormComponent } from './mortgage-calculator-form.component';

describe('MortgageCalculatorFormComponent', () => {
  let component: MortgageCalculatorFormComponent;
  let fixture: ComponentFixture<MortgageCalculatorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
