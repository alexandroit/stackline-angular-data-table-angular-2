import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'loading-example',
  templateUrl: 'src/app/examples/loading/loading.component.html'
})
export class LoadingExampleComponent extends TableExampleBase {
  title = 'Loading state';
  summary = 'Progress state for async data loading.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Loading state"
  [columns]="orderColumns"
  [data]="orders"
  [progressPending]="true">
</stackline-data-table>`;
  tsSnippet = `progressPending = true;`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
