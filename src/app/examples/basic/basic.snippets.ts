import { ExampleSnippets } from '../../shared/example-snippets';

export const BasicSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Orders"
  ariaLabel="Orders table"
  [columns]="orderColumns"
  [data]="orders"
  [pagination]="true"
  [paginationPerPage]="5"
  [paginationRowsPerPageOptions]="pageSizes"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  [striped]="true"
  [highlightOnHover]="true"
  [pointerOnHover]="true"
  defaultSortFieldId="order">
</stackline-data-table>`,
  ts: `orderColumns = getOrderColumns();
orders = orderRows;
pageSizes = [4, 5, 8, 10];`
};
