import { ExampleSnippets } from '../../shared/example-snippets';

export const ColumnFilteringSnippets: ExampleSnippets = {
  html: `<label>
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
</stackline-data-table>`,
  ts: `statusColumnFilters = [{ id: 'status', value: 'Paid' }];

syncColumnFilters() {
  var filters = [];
  if (this.columnStatusFilterValue) filters.push({ id: 'status', value: this.columnStatusFilterValue });
  if (this.columnRegionFilterValue) filters.push({ id: 'region', value: this.columnRegionFilterValue });
  this.statusColumnFilters = filters;
}`
};
