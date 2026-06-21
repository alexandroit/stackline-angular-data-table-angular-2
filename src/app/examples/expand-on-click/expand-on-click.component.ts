import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ExpandOnClickSnippets } from './expand-on-click.snippets';

@Component({
  selector: 'expand-on-click-example',
  templateUrl: 'src/app/examples/expand-on-click/expand-on-click.component.html'
})
export class ExpandOnClickExampleComponent extends TableExampleBase {
  title = 'Expand on row click';
  summary = 'Hide the expander and use row clicks to toggle details.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = ExpandOnClickSnippets.html;
  tsSnippet = ExpandOnClickSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
