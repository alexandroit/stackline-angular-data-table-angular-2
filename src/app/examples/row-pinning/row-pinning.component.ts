import { Component, OnInit } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

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
  htmlSnippet = `<stackline-data-table
  title="Row pinning"
  [columns]="advancedColumns"
  [data]="orders"
  [pinnedTopRows]="topPinnedOrders"
  [pinnedBottomRows]="bottomPinnedOrders">
</stackline-data-table>`;
  tsSnippet = `topPinnedOrders = [orders[6]];
bottomPinnedOrders = [orders[1]];`;

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
    this.bottomPinnedOrders = [this.orders[1]];
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
