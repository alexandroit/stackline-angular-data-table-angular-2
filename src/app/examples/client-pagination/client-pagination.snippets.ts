import { ExampleSnippets } from '../../shared/example-snippets';

export const ClientPaginationSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Client pagination"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [paginationPerPage]="4">
</stackline-data-table>`,
  ts: `orderColumns = getOrderColumns();
orders = orderRows;
pageSizes = [4, 5, 8, 10];`
};
