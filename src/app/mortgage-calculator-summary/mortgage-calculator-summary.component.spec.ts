/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MortgageCalculatorSummaryComponent } from './mortgage-calculator-summary.component';

describe('MortgageCalculatorSummaryComponent', () => {
  let component: MortgageCalculatorSummaryComponent;
  let fixture: ComponentFixture<MortgageCalculatorSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MortgageCalculatorSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MortgageCalculatorSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
