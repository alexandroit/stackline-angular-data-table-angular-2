import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnSizingSnippets } from './column-sizing.snippets';

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
  htmlSnippet = ColumnSizingSnippets.html;
  tsSnippet = ColumnSizingSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
