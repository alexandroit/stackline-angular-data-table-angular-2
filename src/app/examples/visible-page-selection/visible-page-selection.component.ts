import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'visible-page-selection-example',
  templateUrl: 'src/app/examples/visible-page-selection/visible-page-selection.component.html'
})
export class VisiblePageSelectionExampleComponent extends TableExampleBase {
  title = 'Visible page selection';
  summary = 'Select all only touches the currently rendered page.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Visible page selection"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [selectableRows]="true"
  [selectableRowsVisibleOnly]="true">
</stackline-data-table>`;
  tsSnippet = `orderColumns = getOrderColumns();
orders = orderRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
