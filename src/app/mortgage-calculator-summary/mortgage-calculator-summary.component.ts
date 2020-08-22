import { Component, OnInit, OnDestroy } from '@angular/core';
import { MortgageCalculatorService } from '../services/mortgage-calculator.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  category: string;
  term: string;
  amortizationPeriod: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { category: "1", term: 'Hydrogen', amortizationPeriod: 1.0079 },
  { category: "2", term: 'Helium', amortizationPeriod: 4.0026 },
  { category: "3", term: 'Lithium', amortizationPeriod: 6.941 },
];

@Component({
  selector: 'app-mortgage-calculator-summary',
  templateUrl: './mortgage-calculator-summary.component.html',
  styleUrls: ['./mortgage-calculator-summary.component.scss']
})
export class MortgageCalculatorSummaryComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['category', 'term', 'amortizationPeriod'];
  dataSource = ELEMENT_DATA;
  private subscription: Subscription = new Subscription();

  constructor(private mortgageService: MortgageCalculatorService) { }

  ngOnInit() {
    this.subscription.add(
      this.mortgageService.mortgageSummary$
        .pipe(filter(summary => !!summary))
        .subscribe(summary => this.dataSource = summary)
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
