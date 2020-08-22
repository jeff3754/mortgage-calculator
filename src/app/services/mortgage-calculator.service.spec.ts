/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MortgageCalculatorService } from './mortgage-calculator.service';

describe('Service: MortgageCalculator', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MortgageCalculatorService]
    });
  });

  it('should ...', inject([MortgageCalculatorService], (service: MortgageCalculatorService) => {
    expect(service).toBeTruthy();
  }));
});
