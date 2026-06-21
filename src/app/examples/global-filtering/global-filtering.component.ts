import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { GlobalFilteringSnippets } from './global-filtering.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'global-filtering-example',
  templateUrl: 'src/app/examples/global-filtering/global-filtering.component.html',
  styleUrls: ['src/app/examples/global-filtering/global-filtering.component.css']
})
export class GlobalFilteringExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Global filtering';
  summary = 'Filter across visible columns with a controlled globalFilter input.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  globalFilterText = 'canada';
  htmlSnippet = GlobalFilteringSnippets.html;
  tsSnippet = GlobalFilteringSnippets.ts;

  setGlobalFilter(value: string) {
    this.globalFilterText = value || '';
    this.record('global filter', { value: this.globalFilterText });
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
