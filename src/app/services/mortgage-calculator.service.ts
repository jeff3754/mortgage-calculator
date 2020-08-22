import { Injectable } from '@angular/core';
import { Mortgage } from '../models/mortgage.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  mortgageSummary$: BehaviorSubject<any> = new BehaviorSubject<any>(undefined);

  constructor() { }

  calculateMortgage(input: Mortgage) {
    this.mortgageSummary$.next(
      [
        { category: "Updated", term: 'Updated - Hydrogen', amortizationPeriod: 1.0079 }
      ]
    );
  }

}
