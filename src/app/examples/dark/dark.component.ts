import { Component } from '@angular/core';
import { dataSnippet, getRevenueColumns, revenue as revenueRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'dark-example',
  templateUrl: 'src/app/examples/dark/dark.component.html'
})
export class DarkExampleComponent extends TableExampleBase {
  title = 'Dark theme';
  summary = 'The legacy line keeps the same theme input.';
  revenueColumns = getRevenueColumns();
  revenue = revenueRows;
  htmlSnippet = `<stackline-data-table
  title="Dark theme"
  theme="dark"
  [columns]="revenueColumns"
  [data]="revenue"
  [pagination]="true">
</stackline-data-table>`;
  tsSnippet = `revenueColumns = getRevenueColumns();
revenue = revenueRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.revenue.slice(0, 3));
  }
}
