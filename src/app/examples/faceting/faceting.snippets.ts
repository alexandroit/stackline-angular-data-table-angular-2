import { ExampleSnippets } from '../../shared/example-snippets';

export const FacetingSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  #facetedTable
  title="Faceted values"
  [columns]="advancedColumns"
  [data]="orders"
  [globalFilter]="facetFilterText"
  [columnFilters]="facetColumnFilters">
</stackline-data-table>

{{ getFacetSummary(facetedTable, 'status') }}`,
  ts: `getFacetSummary(table: any, columnId: string) {
  return JSON.stringify(table.getColumnUniqueValues(columnId), null, 2);
}`
};
