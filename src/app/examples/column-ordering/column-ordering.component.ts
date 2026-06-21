import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnOrderingSnippets } from './column-ordering.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'column-ordering-example',
  templateUrl: 'src/app/examples/column-ordering/column-ordering.component.html',
  styleUrls: ['src/app/examples/column-ordering/column-ordering.component.css']
})
export class ColumnOrderingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Column ordering';
  summary = 'Render columns in a controlled order without mutating the source columns.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
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
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
