import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ExpandableRowsSnippets } from './expandable-rows.snippets';

@Component({
  selector: 'expandable-rows-example',
  templateUrl: 'src/app/examples/expandable-rows/expandable-rows.component.html'
})
export class ExpandableRowsExampleComponent extends TableExampleBase {
  title = 'Expandable rows';
  summary = 'Expanded details rendered from an Angular template.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = ExpandableRowsSnippets.html;
  tsSnippet = ExpandableRowsSnippets.ts;

  isLargeOrder(row: any) {
    return row.total > 2000;
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
