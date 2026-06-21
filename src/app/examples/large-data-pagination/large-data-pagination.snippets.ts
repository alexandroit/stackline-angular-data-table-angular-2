import { ExampleSnippets } from '../../shared/example-snippets';

export const LargeDataPaginationSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Large dataset"
  [columns]="largeColumns"
  [data]="largePage.rows"
  [pagination]="true"
  [paginationServer]="true"
  [paginationTotalRows]="largePage.totalRows"
  [paginationDefaultPage]="largePage.page"
  [paginationPerPage]="largePage.perPage"
  [paginationRowsPerPageOptions]="pageSizes"
  [sortServer]="true"
  [progressPending]="largePage.loading"
  (pageChange)="loadPage($event.page, largePage.perPage)"
  (rowsPerPageChange)="loadPage(1, $event.rowsPerPage)"
  (sortChange)="sortLargeData($event)">
</stackline-data-table>`,
  ts: `largePage = {
  rows: [],
  totalRows: 10000,
  page: 1,
  perPage: 25,
  loading: false
};
sortField = 'id';
sortDirection = 'asc';

loadPage(page: number, perPage: number) {
  this.largePage = {
    rows: fetchRowsFromApi(page, perPage, this.sortField, this.sortDirection),
    totalRows: 10000,
    page: page,
    perPage: perPage,
    loading: false
  };
}

sortLargeData(event: any) {
  this.sortField = event.column.id;
  this.sortDirection = event.direction;
  this.loadPage(1, this.largePage.perPage);
}`
};
