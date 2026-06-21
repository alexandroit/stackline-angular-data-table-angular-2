import { Component } from '@angular/core';
import { dataSnippet, getRevenueColumns, revenue as revenueRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { FixedHeaderSnippets } from './fixed-header.snippets';

@Component({
  selector: 'fixed-header-example',
  templateUrl: 'src/app/examples/fixed-header/fixed-header.component.html'
})
export class FixedHeaderExampleComponent extends TableExampleBase {
  title = 'Fixed header';
  summary = 'Scrollable table body with sticky header support.';
  revenueColumns = getRevenueColumns();
  revenue = revenueRows;
  htmlSnippet = FixedHeaderSnippets.html;
  tsSnippet = FixedHeaderSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.revenue.slice(0, 3));
  }
}
