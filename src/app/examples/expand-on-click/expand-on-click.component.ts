import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'expand-on-click-example',
  templateUrl: 'src/app/examples/expand-on-click/expand-on-click.component.html'
})
export class ExpandOnClickExampleComponent extends TableExampleBase {
  title = 'Expand on row click';
  summary = 'Hide the expander and use row clicks to toggle details.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Expand on row click"
  [columns]="orderColumns"
  [data]="orders"
  [expandableRows]="true"
  [expandableRowsHideExpander]="true"
  [expandOnRowClicked]="true"
  [expandableRowTemplate]="orderDetail">
</stackline-data-table>`;
  tsSnippet = `// The row click output remains available while expansion is handled by the component.`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
