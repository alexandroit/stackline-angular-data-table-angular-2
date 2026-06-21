import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'column-sizing-example',
  templateUrl: 'src/app/examples/column-sizing/column-sizing.component.html'
})
export class ColumnSizingExampleComponent extends TableExampleBase {
  title = 'Column sizing';
  summary = 'Control column width from a columnSizing state object.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  wideColumnSizingState: any = { order: 180, customer: 320, region: 180, total: 180 };
  htmlSnippet = `<stackline-data-table
  title="Column sizing"
  [columns]="advancedColumns"
  [data]="orders"
  [columnSizing]="wideColumnSizingState">
</stackline-data-table>`;
  tsSnippet = `wideColumnSizingState = { order: 180, customer: 320, region: 180, total: 180 };`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
