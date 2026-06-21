import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnOrderingSnippets } from './column-ordering.snippets';

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
  htmlSnippet = ColumnOrderingSnippets.html;
  tsSnippet = ColumnOrderingSnippets.ts;

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
