import { ExampleSnippets } from '../../shared/example-snippets';

export const GlobalFilteringSnippets: ExampleSnippets = {
  html: `<label>
  Global search
  <input
    type="search"
    [value]="globalFilterText"
    (input)="setGlobalFilter($event.target.value)" />
</label>

<stackline-data-table
  title="Global filtering"
  [columns]="advancedColumns"
  [data]="orders"
  [globalFilter]="globalFilterText">
</stackline-data-table>`,
  ts: `globalFilterText = 'canada';

setGlobalFilter(value: string) {
  this.globalFilterText = value || '';
}`
};
