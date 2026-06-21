import { Component, OnInit } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows, pageSizes } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ServerPaginationSnippets } from './server-pagination.snippets';

@Component({
  selector: 'server-pagination-example',
  templateUrl: 'src/app/examples/server-pagination/server-pagination.component.html'
})
export class ServerPaginationExampleComponent extends TableExampleBase implements OnInit {
  title = 'Server pagination';
  summary = 'The app owns slicing and passes total rows to the component.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  pageSizes = pageSizes;
  serverPage = 1;
  serverRowsPerPage = 4;
  serverRows: any[] = [];
  htmlSnippet = ServerPaginationSnippets.html;
  tsSnippet = ServerPaginationSnippets.ts;

  ngOnInit() {
    this.updateServerRows();
  }

  changeServerPage(event: any) {
    this.serverPage = event.page;
    this.updateServerRows();
    this.record('server page', event);
  }

  changeServerRowsPerPage(event: any) {
    this.serverRowsPerPage = event.rowsPerPage;
    this.serverPage = 1;
    this.updateServerRows();
    this.record('server rowsPerPage', event);
  }

  updateServerRows() {
    var start = (this.serverPage - 1) * this.serverRowsPerPage;
    this.serverRows = this.orders.slice(start, start + this.serverRowsPerPage);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
