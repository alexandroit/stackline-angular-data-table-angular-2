import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnPinningSnippets } from './column-pinning.snippets';

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
  htmlSnippet = ColumnPinningSnippets.html;
  tsSnippet = ColumnPinningSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
