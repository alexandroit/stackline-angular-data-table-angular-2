import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'row-events-example',
  templateUrl: 'src/app/examples/row-events/row-events.component.html'
})
export class RowEventsExampleComponent extends TableExampleBase {
  title = 'Row events';
  summary = 'Click, double click, mouse enter and mouse leave outputs.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Row events"
  [columns]="orderColumns"
  [data]="orders"
  (rowClicked)="record('rowClicked', $event)"
  (rowDoubleClicked)="record('rowDoubleClicked', $event)"
  (rowMouseEnter)="record('rowMouseEnter', $event)">
</stackline-data-table>`;
  tsSnippet = `record(type: string, value: any) {
  this.events.unshift(type + ': ' + JSON.stringify(value));
}`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
