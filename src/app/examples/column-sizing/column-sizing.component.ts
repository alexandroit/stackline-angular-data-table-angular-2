import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnSizingSnippets } from './column-sizing.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'column-sizing-example',
  templateUrl: 'src/app/examples/column-sizing/column-sizing.component.html',
  styleUrls: ['src/app/examples/column-sizing/column-sizing.component.css']
})
export class ColumnSizingExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Column sizing';
  summary = 'Control column width from a columnSizing state object.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  wideColumnSizingState: any = { order: 180, customer: 320, region: 180, total: 180 };
  htmlSnippet = ColumnSizingSnippets.html;
  tsSnippet = ColumnSizingSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
