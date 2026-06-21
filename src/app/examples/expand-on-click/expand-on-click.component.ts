import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { ExpandOnClickSnippets } from './expand-on-click.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'expand-on-click-example',
  templateUrl: 'src/app/examples/expand-on-click/expand-on-click.component.html',
  styleUrls: ['src/app/examples/expand-on-click/expand-on-click.component.css']
})
export class ExpandOnClickExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Expand on row click';
  summary = 'Hide the expander and use row clicks to toggle details.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  htmlSnippet = ExpandOnClickSnippets.html;
  tsSnippet = ExpandOnClickSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
