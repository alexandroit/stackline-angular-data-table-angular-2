import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'column-pinning-example',
  templateUrl: 'src/app/examples/column-pinning/column-pinning.component.html'
})
export class ColumnPinningExampleComponent extends TableExampleBase {
  title = 'Column pinning';
  summary = 'Sticky left and right columns for wide admin grids.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  columnPinningState: any = { left: ['order'], right: ['total'] };
  columnSizingState: any = { order: 130, customer: 240, total: 130 };
  htmlSnippet = `<stackline-data-table
  title="Column pinning"
  [columns]="advancedColumns"
  [data]="orders"
  [columnPinning]="{ left: ['order'], right: ['total'] }"
  [columnSizing]="columnSizingState">
</stackline-data-table>`;
  tsSnippet = `columnPinningState = { left: ['order'], right: ['total'] };
columnSizingState = { order: 130, customer: 240, total: 130 };`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
