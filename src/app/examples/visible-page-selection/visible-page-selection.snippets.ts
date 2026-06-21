import { ExampleSnippets } from '../../shared/example-snippets';

export const VisiblePageSelectionSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Visible page selection"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [selectableRows]="true"
  [selectableRowsVisibleOnly]="true">
</stackline-data-table>`,
  ts: `orderColumns = getOrderColumns();
orders = orderRows;`
};
