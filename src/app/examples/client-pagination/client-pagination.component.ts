import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows, pageSizes } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ClientPaginationSnippets } from './client-pagination.snippets';

@Component({
  selector: 'client-pagination-example',
  templateUrl: 'src/app/examples/client-pagination/client-pagination.component.html'
})
export class ClientPaginationExampleComponent extends TableExampleBase {
  title = 'Client pagination';
  summary = 'The component slices local data and emits page changes.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  pageSizes = pageSizes;
  htmlSnippet = ClientPaginationSnippets.html;
  tsSnippet = ClientPaginationSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
