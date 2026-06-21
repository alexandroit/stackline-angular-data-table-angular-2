import { ExampleSnippets } from '../../shared/example-snippets';

export const ServerPaginationSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Server pagination simulation"
  [columns]="orderColumns"
  [data]="serverRows"
  [pagination]="true"
  [paginationServer]="true"
  [paginationTotalRows]="orders.length"
  [paginationDefaultPage]="serverPage"
  [paginationPerPage]="serverRowsPerPage"
  (pageChange)="changeServerPage($event)">
</stackline-data-table>`,
  ts: `changeServerPage(event: any) {
  this.serverPage = event.page;
  this.updateServerRows();
}

updateServerRows() {
  var start = (this.serverPage - 1) * this.serverRowsPerPage;
  this.serverRows = this.orders.slice(start, start + this.serverRowsPerPage);
}`
};
