import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { VisiblePageSelectionSnippets } from './visible-page-selection.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'visible-page-selection-example',
  templateUrl: 'src/app/examples/visible-page-selection/visible-page-selection.component.html',
  styleUrls: ['src/app/examples/visible-page-selection/visible-page-selection.component.css']
})
export class VisiblePageSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Visible page selection';
  summary = 'Select all only touches the currently rendered page.';
  orderColumns = this.demoData.getOrderColumns();
  orders = this.demoData.getOrders();
  htmlSnippet = VisiblePageSelectionSnippets.html;
  tsSnippet = VisiblePageSelectionSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
