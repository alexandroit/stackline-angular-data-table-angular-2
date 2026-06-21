import { ExampleSnippets } from '../../shared/example-snippets';

export const ColumnOrderingSnippets: ExampleSnippets = {
  html: `<label>
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
</stackline-data-table>`,
  ts: `columnOrderState = ['customer', 'order', 'region', 'status', 'total', 'channel'];

setColumnOrderPreset(preset: string) {
  this.columnOrderState = preset === 'money-first'
    ? ['total', 'order', 'customer', 'region', 'status', 'channel']
    : ['customer', 'order', 'region', 'status', 'total', 'channel'];
}`
};
