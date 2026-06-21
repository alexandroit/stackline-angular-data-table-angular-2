import { ExampleSnippets } from '../../shared/example-snippets';

export const SortingSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Sortable inventory"
  [columns]="inventoryColumns"
  [data]="inventory"
  defaultSortFieldId="stock"
  [defaultSortAsc]="false"
  [striped]="true"
  [highlightOnHover]="true">
</stackline-data-table>`,
  ts: `inventoryColumns = [
  { id: 'sku', name: 'SKU', selector: 'sku', sortable: true },
  { id: 'stock', name: 'Stock', selector: 'stock', sortable: true, right: true }
];`
};
