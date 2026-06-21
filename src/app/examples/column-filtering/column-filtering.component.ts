import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows, regionOptions, statusOptions } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'column-filtering-example',
  templateUrl: 'src/app/examples/column-filtering/column-filtering.component.html'
})
export class ColumnFilteringExampleComponent extends TableExampleBase {
  title = 'Column filtering';
  summary = 'Filter individual columns with TanStack-style id/value filter state.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  statusOptions = statusOptions;
  regionOptions = regionOptions;
  columnStatusFilterValue = 'Paid';
  columnRegionFilterValue = '';
  statusColumnFilters = [{ id: 'status', value: 'Paid' }];
  htmlSnippet = `<label>
  Status combobox
  <select [value]="columnStatusFilterValue" (change)="setColumnStatusFilter($event.target.value)">
    <option *ngFor="let status of statusOptions" [value]="status">{{ status || 'All statuses' }}</option>
  </select>
</label>

<stackline-data-table
  title="Column filters"
  [columns]="advancedColumns"
  [data]="orders"
  [columnFilters]="statusColumnFilters">
</stackline-data-table>`;
  tsSnippet = `statusColumnFilters = [{ id: 'status', value: 'Paid' }];

syncColumnFilters() {
  var filters = [];
  if (this.columnStatusFilterValue) filters.push({ id: 'status', value: this.columnStatusFilterValue });
  if (this.columnRegionFilterValue) filters.push({ id: 'region', value: this.columnRegionFilterValue });
  this.statusColumnFilters = filters;
}`;

  setColumnStatusFilter(value: string) {
    this.columnStatusFilterValue = value || '';
    this.syncColumnFilters();
  }

  setColumnRegionFilter(value: string) {
    this.columnRegionFilterValue = value || '';
    this.syncColumnFilters();
  }

  clearColumnFilters() {
    this.columnStatusFilterValue = '';
    this.columnRegionFilterValue = '';
    this.syncColumnFilters();
  }

  syncColumnFilters() {
    var filters: any[] = [];

    if (this.columnStatusFilterValue) {
      filters.push({ id: 'status', value: this.columnStatusFilterValue });
    }

    if (this.columnRegionFilterValue) {
      filters.push({ id: 'region', value: this.columnRegionFilterValue });
    }

    this.statusColumnFilters = filters;
    this.record('column filters', filters);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
