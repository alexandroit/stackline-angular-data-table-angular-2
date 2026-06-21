import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { VisiblePageSelectionSnippets } from './visible-page-selection.snippets';

@Component({
  selector: 'visible-page-selection-example',
  templateUrl: 'src/app/examples/visible-page-selection/visible-page-selection.component.html'
})
export class VisiblePageSelectionExampleComponent extends TableExampleBase {
  title = 'Visible page selection';
  summary = 'Select all only touches the currently rendered page.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = VisiblePageSelectionSnippets.html;
  tsSnippet = VisiblePageSelectionSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
