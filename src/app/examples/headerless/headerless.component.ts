import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { HeaderlessSnippets } from './headerless.snippets';

@Component({
  selector: 'headerless-example',
  templateUrl: 'src/app/examples/headerless/headerless.component.html'
})
export class HeaderlessExampleComponent extends TableExampleBase {
  title = 'Headerless table';
  summary = 'No title and no table head for compact embedded lists.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = HeaderlessSnippets.html;
  tsSnippet = HeaderlessSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
