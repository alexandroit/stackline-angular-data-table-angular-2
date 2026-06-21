import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'expandable-rows-example',
  templateUrl: 'src/app/examples/expandable-rows/expandable-rows.component.html'
})
export class ExpandableRowsExampleComponent extends TableExampleBase {
  title = 'Expandable rows';
  summary = 'Expanded details rendered from an Angular template.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<template #orderDetail let-row="row">
  <div>{{ row.customer }} - {{ row.notes }}</div>
</template>

<stackline-data-table
  title="Expandable order details"
  [columns]="orderColumns"
  [data]="orders"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail">
</stackline-data-table>`;
  tsSnippet = `isLargeOrder(row: any) {
  return row.total > 2000;
}`;

  isLargeOrder(row: any) {
    return row.total > 2000;
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
