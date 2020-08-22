import { Injectable } from '@angular/core';
import { Mortgage } from '../models/mortgage.model';
import { BehaviorSubject } from 'rxjs';
import { MortgageSummary } from "../models/calculation-summary.model";

@Injectable({
  providedIn: 'root'
})
export class MortgageCalculatorService {

  mortgageSummary$: BehaviorSubject<MortgageSummary[]> = new BehaviorSubject<MortgageSummary[]>(undefined);

  constructor() { }

  calculateMortgage(input: Mortgage) {
    const interest = input.InterestRate;
    const years = input.AmortizationPeriod;
    const period = input.PaymentFrequency;
    const term = input.Term;

    const loanAmount = input.Amount;
    const rate = interest / 100;

    const termNoOfPayment = term * period;
    const apNoOfPayment = years * period;

    const apPayment = (((rate / period) * loanAmount)  / (1- (Math.pow (1+ (rate / period), (years * -period)))));
    const termPayment = (((rate / period) * loanAmount)  / (1- (Math.pow (1+ (rate / period), (term * -period)))));

    const apTotalInterestAmount = apPayment * (years * period) - loanAmount;
    const apTotalCost = loanAmount + apTotalInterestAmount;

    const termTotalInterestAmount = termPayment * (term * period) - loanAmount;
    const termTotalCost = apPayment * termNoOfPayment;

    this.mortgageSummary$.next(
      [
        { category: "Number of Payments", term: termNoOfPayment, amortizationPeriod: apNoOfPayment },
        { category: "Mortgage Payment", term: apPayment, amortizationPeriod: apPayment },
        { category: "Principal Payments", term: NaN, amortizationPeriod: loanAmount },
        { category: "Interest Payments", term: NaN, amortizationPeriod: apTotalInterestAmount },
        { category: "Total Cost", term: termTotalCost, amortizationPeriod: apTotalCost },
      ]
    );
  }

}
