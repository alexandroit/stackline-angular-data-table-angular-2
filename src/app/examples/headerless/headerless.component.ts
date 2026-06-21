import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { HeaderlessSnippets } from './headerless.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'headerless-example',
  templateUrl: 'src/app/examples/headerless/headerless.component.html',
  styleUrls: ['src/app/examples/headerless/headerless.component.css']
})
export class HeaderlessExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Headerless table';
  summary = 'No title and no table head for compact embedded lists.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  htmlSnippet = HeaderlessSnippets.html;
  tsSnippet = HeaderlessSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
