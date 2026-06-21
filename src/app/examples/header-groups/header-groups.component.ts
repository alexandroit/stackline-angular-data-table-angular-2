import { Component } from '@angular/core';
import { dataSnippet, getHeaderGroupColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'header-groups-example',
  templateUrl: 'src/app/examples/header-groups/header-groups.component.html'
})
export class HeaderGroupsExampleComponent extends TableExampleBase {
  title = 'Header groups';
  summary = 'Use nested column definitions to render grouped headers.';
  headerGroupColumns = getHeaderGroupColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Header groups"
  [columns]="headerGroupColumns"
  [data]="orders">
</stackline-data-table>`;
  tsSnippet = `headerGroupColumns = [
  { name: 'Order', columns: [{ id: 'order', name: 'Order', selector: 'order' }] },
  { name: 'Customer', columns: [{ id: 'customer', name: 'Customer', selector: 'customer' }] }
];`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
