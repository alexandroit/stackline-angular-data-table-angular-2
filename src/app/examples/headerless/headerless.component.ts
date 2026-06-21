import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'headerless-example',
  templateUrl: 'src/app/examples/headerless/headerless.component.html'
})
export class HeaderlessExampleComponent extends TableExampleBase {
  title = 'Headerless table';
  summary = 'No title and no table head for compact embedded lists.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  [columns]="orderColumns"
  [data]="orders"
  [noHeader]="true"
  [noTableHead]="true"
  [dense]="true">
</stackline-data-table>`;
  tsSnippet = `orderColumns = getOrderColumns();
orders = orderRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
