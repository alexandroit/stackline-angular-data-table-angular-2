import { Component, OnInit } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { RowPinningSnippets } from './row-pinning.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'row-pinning-example',
  templateUrl: 'src/app/examples/row-pinning/row-pinning.component.html',
  styleUrls: ['src/app/examples/row-pinning/row-pinning.component.css']
})
export class RowPinningExampleComponent extends TableExampleBase implements OnInit {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Row pinning';
  summary = 'Pin important rows to the top or bottom while keeping the rest sortable.';
  advancedColumns = this.demoData.getAdvancedColumns();
  orders = this.demoData.getOrders();
  topPinnedOrders: any[] = [];
  bottomPinnedOrders: any[] = [];
  htmlSnippet = RowPinningSnippets.html;
  tsSnippet = RowPinningSnippets.ts;

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
    this.bottomPinnedOrders = [this.orders[1]];
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
