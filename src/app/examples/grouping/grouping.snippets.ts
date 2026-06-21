import { ExampleSnippets } from '../../shared/example-snippets';

export const GroupingSnippets: ExampleSnippets = {
  html: `<label>
  Group by
  <select [value]="groupByField" (change)="setGroupByField($event.target.value)">
    <option value="region">Region</option>
    <option value="status">Status</option>
    <option value="channel">Channel</option>
  </select>
</label>

<stackline-data-table
  title="Grouped rows"
  [columns]="advancedColumns"
  [data]="orders"
  [groupBy]="groupByField">
</stackline-data-table>`,
  ts: `groupByField = 'region';

setGroupByField(value: string) {
  this.groupByField = value || 'region';
}`
};
