import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { BasicSnippets } from './basic.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'basic-example',
  templateUrl: 'src/app/examples/basic/basic.component.html',
  styleUrls: ['src/app/examples/basic/basic.component.css']
})
export class BasicExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Basic usage';
  summary = 'Sorting, pagination, hover states and multi-row selection in one table.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  pageSizes = this.demoData.getPageSizes();
  htmlSnippet = BasicSnippets.html;
  tsSnippet = BasicSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
