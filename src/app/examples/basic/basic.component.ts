import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows, pageSizes } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

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
  htmlSnippet = `<stackline-data-table
  title="Orders"
  ariaLabel="Orders table"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [paginationPerPage]="5"
  [paginationRowsPerPageOptions]="pageSizes"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  [striped]="true"
  [highlightOnHover]="true"
  [pointerOnHover]="true"
  defaultSortFieldId="order">
</stackline-data-table>`;
  tsSnippet = `orderColumns = getOrderColumns();
orders = orderRows;
pageSizes = [4, 5, 8, 10];`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
