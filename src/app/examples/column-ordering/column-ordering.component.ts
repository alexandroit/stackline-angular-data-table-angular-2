import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'column-ordering-example',
  templateUrl: 'src/app/examples/column-ordering/column-ordering.component.html'
})
export class ColumnOrderingExampleComponent extends TableExampleBase {
  title = 'Column ordering';
  summary = 'Render columns in a controlled order without mutating the source columns.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  columnOrderPreset = 'customer-first';
  columnOrderState: any[] = ['customer', 'order', 'region', 'status', 'total', 'channel'];
  htmlSnippet = `<label>
  Order preset
  <select [value]="columnOrderPreset" (change)="setColumnOrderPreset($event.target.value)">
    <option value="customer-first">Customer first</option>
    <option value="money-first">Money first</option>
    <option value="operations-first">Operations first</option>
  </select>
</label>

<stackline-data-table
  title="Column ordering"
  [columns]="advancedColumns"
  [data]="orders"
  [columnOrder]="columnOrderState">
</stackline-data-table>`;
  tsSnippet = `columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];

setColumnOrderPreset(preset: string) {
  this.columnOrderState = preset === 'money-first'
    ? ['total', 'order', 'customer', 'region', 'status', 'channel']
    : ['customer', 'order', 'region', 'status', 'total', 'channel'];
}`;

  setColumnOrderPreset(preset: string) {
    this.columnOrderPreset = preset;

    if (preset === 'money-first') {
      this.columnOrderState = ['total', 'order', 'customer', 'region', 'status', 'channel'];
    } else if (preset === 'operations-first') {
      this.columnOrderState = ['status', 'channel', 'region', 'order', 'customer', 'total'];
    } else {
      this.columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];
    }

    this.record('column order preset', { preset: preset, order: this.columnOrderState });
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
