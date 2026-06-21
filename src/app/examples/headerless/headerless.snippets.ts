import { ExampleSnippets } from '../../shared/example-snippets';

export const HeaderlessSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  [columns]="orderColumns"
  [data]="orders"
  [noHeader]="true"
  [noTableHead]="true"
  [dense]="true">
</stackline-data-table>`,
  ts: `orderColumns = getOrderColumns();
orders = orderRows;`
};
