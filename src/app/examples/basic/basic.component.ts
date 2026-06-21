import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows, pageSizes } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { BasicSnippets } from './basic.snippets';

@Component({
  selector: 'basic-example',
  templateUrl: 'src/app/examples/basic/basic.component.html'
})
export class BasicExampleComponent extends TableExampleBase {
  title = 'Basic usage';
  summary = 'Sorting, pagination, hover states and multi-row selection in one table.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  pageSizes = pageSizes;
  htmlSnippet = BasicSnippets.html;
  tsSnippet = BasicSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
