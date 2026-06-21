import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'multi-selection-example',
  templateUrl: 'src/app/examples/multi-selection/multi-selection.component.html'
})
export class MultiSelectionExampleComponent extends TableExampleBase {
  title = 'Multi selection';
  summary = 'Checkbox row selection with selected-row highlighting.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Multi selection"
  [columns]="orderColumns"
  [data]="orders"
  [selectableRows]="true"
  [selectableRowsHighlight]="true">
</stackline-data-table>`;
  tsSnippet = `orderColumns = getOrderColumns();
orders = orderRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
