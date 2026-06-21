import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { RowEventsSnippets } from './row-events.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'row-events-example',
  templateUrl: 'src/app/examples/row-events/row-events.component.html',
  styleUrls: ['src/app/examples/row-events/row-events.component.css']
})
export class RowEventsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Row events';
  summary = 'Click, double click, mouse enter and mouse leave outputs.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  htmlSnippet = RowEventsSnippets.html;
  tsSnippet = RowEventsSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
