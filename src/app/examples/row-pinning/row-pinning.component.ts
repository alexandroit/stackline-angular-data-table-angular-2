import { Component, OnInit } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { RowPinningSnippets } from './row-pinning.snippets';

@Component({
  selector: 'row-pinning-example',
  templateUrl: 'src/app/examples/row-pinning/row-pinning.component.html'
})
export class RowPinningExampleComponent extends TableExampleBase implements OnInit {
  title = 'Row pinning';
  summary = 'Pin important rows to the top or bottom while keeping the rest sortable.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  topPinnedOrders: any[] = [];
  bottomPinnedOrders: any[] = [];
  htmlSnippet = RowPinningSnippets.html;
  tsSnippet = RowPinningSnippets.ts;

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
    this.bottomPinnedOrders = [this.orders[1]];
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
