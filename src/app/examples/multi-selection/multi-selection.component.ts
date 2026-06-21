import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { MultiSelectionSnippets } from './multi-selection.snippets';

@Component({
  selector: 'multi-selection-example',
  templateUrl: 'src/app/examples/multi-selection/multi-selection.component.html'
})
export class MultiSelectionExampleComponent extends TableExampleBase {
  title = 'Multi selection';
  summary = 'Checkbox row selection with selected-row highlighting.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = MultiSelectionSnippets.html;
  tsSnippet = MultiSelectionSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
