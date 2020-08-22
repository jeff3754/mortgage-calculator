import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AmortizationPeriodData, TermData, PaymentFrequencyData } from "./../constants/mortgage-defaults";
import { MortgageCalculatorService } from "../services/mortgage-calculator.service";
import { Mortgage } from "../models/mortgage.model";

@Component({
  selector: 'app-mortgage-calculator-form',
  templateUrl: './mortgage-calculator-form.component.html',
  styleUrls: ['./mortgage-calculator-form.component.scss']
})
export class MortgageCalculatorFormComponent implements OnInit {

  amortisationPeriods: any[] = [];
  terms: any[] = [];
  paymentFrequencies: any[] = [];
  inputGroup: FormGroup;

  constructor(private mortgageService: MortgageCalculatorService) {
    this.amortisationPeriods = AmortizationPeriodData;
    this.terms = TermData;
    this.paymentFrequencies = PaymentFrequencyData;
  }

  ngOnInit(): void {
    this.inputGroup = new FormGroup({
      mortgageAmount: new FormControl(0),
      interestRate: new FormControl(0),
      amortization: new FormControl(''),
      term: new FormControl(''),
      paymentFrequency: new FormControl(""),
    });
  }

  onSubmit() {
    console.log(this.inputGroup.value);
    if(this.inputGroup.valid) {
      const formValue = this.inputGroup.value;
      const input: Mortgage = {
        Amount: formValue.mortgageAmount,
        InterestRate: formValue.interestRate,
        AmortizationPeriod: formValue.amortization.value,
        PaymentFrequency: formValue.paymentFrequency.value,
        Term: formValue.term.value
      };
      this.mortgageService.calculateMortgage(input);
    }
  }

}
