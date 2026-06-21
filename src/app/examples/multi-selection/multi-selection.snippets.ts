import { ExampleSnippets } from '../../shared/example-snippets';

export const MultiSelectionSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Multi selection"
  [columns]="orderColumns"
  [data]="orders"
  [selectableRows]="true"
  [selectableRowsHighlight]="true">
</stackline-data-table>`,
  ts: `orderColumns = getOrderColumns();
orders = orderRows;`
};
