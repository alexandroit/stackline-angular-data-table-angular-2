import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { GlobalFilteringSnippets } from './global-filtering.snippets';

@Component({
  selector: 'global-filtering-example',
  templateUrl: 'src/app/examples/global-filtering/global-filtering.component.html'
})
export class GlobalFilteringExampleComponent extends TableExampleBase {
  title = 'Global filtering';
  summary = 'Filter across visible columns with a controlled globalFilter input.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  globalFilterText = 'canada';
  htmlSnippet = GlobalFilteringSnippets.html;
  tsSnippet = GlobalFilteringSnippets.ts;

  setGlobalFilter(value: string) {
    this.globalFilterText = value || '';
    this.record('global filter', { value: this.globalFilterText });
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
