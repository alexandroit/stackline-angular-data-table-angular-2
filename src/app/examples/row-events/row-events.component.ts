import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { RowEventsSnippets } from './row-events.snippets';

@Component({
  selector: 'row-events-example',
  templateUrl: 'src/app/examples/row-events/row-events.component.html'
})
export class RowEventsExampleComponent extends TableExampleBase {
  title = 'Row events';
  summary = 'Click, double click, mouse enter and mouse leave outputs.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = RowEventsSnippets.html;
  tsSnippet = RowEventsSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
