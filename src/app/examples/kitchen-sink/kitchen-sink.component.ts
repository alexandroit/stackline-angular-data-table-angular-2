import { Component, OnInit } from '@angular/core';
import {
  cloneColumnVisibility,
  dataSnippet,
  getHeaderGroupColumns,
  orders as orderRows,
  regionOptions,
  statusOptions
} from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'kitchen-sink-example',
  templateUrl: 'src/app/examples/kitchen-sink/kitchen-sink.component.html'
})
export class KitchenSinkExampleComponent extends TableExampleBase implements OnInit {
  title = 'Kitchen sink';
  summary = 'Filtering, visibility, ordering, pinning, grouping, selection, expansion and pagination together.';
  headerGroupColumns = getHeaderGroupColumns();
  orders = orderRows;
  regionOptions = regionOptions;
  statusOptions = statusOptions;
  kitchenGlobalFilter = 'paid';
  kitchenRegionFilter = 'Canada';
  kitchenStatusFilter = '';
  kitchenGroupBy = 'region';
  kitchenColumnFilters = [{ id: 'region', value: 'Canada' }];
  kitchenColumnVisibility: any = { channel: false };
  kitchenColumnOrder: any[] = ['order', 'customer', 'status', 'region', 'total'];
  columnPinningState: any = { left: ['order'], right: ['total'] };
  columnSizingState: any = { order: 130, customer: 240, total: 130 };
  topPinnedOrders: any[] = [];
  htmlSnippet = `<stackline-data-table
  title="Kitchen sink"
  [columns]="headerGroupColumns"
  [data]="orders"
  [globalFilter]="kitchenGlobalFilter"
  [columnFilters]="kitchenColumnFilters"
  [columnVisibility]="kitchenColumnVisibility"
  [columnOrder]="kitchenColumnOrder"
  [columnPinning]="columnPinningState"
  [pinnedTopRows]="topPinnedOrders"
  [selectableRows]="true"
  [expandableRows]="true"
  [groupBy]="kitchenGroupBy">
</stackline-data-table>`;
  tsSnippet = `kitchenGlobalFilter = 'paid';
kitchenRegionFilter = 'Canada';
kitchenColumnFilters = [{ id: 'region', value: 'Canada' }];
kitchenColumnVisibility = { channel: false };
kitchenColumnOrder = ['order', 'customer', 'status', 'region', 'total'];
kitchenGroupBy = 'region';`;

  ngOnInit() {
    this.topPinnedOrders = [this.orders[6]];
  }

  setKitchenGlobalFilter(value: string) {
    this.kitchenGlobalFilter = value || '';
    this.record('kitchen search', { value: this.kitchenGlobalFilter });
  }

  setKitchenRegionFilter(value: string) {
    this.kitchenRegionFilter = value || '';
    this.syncKitchenFilters();
  }

  setKitchenStatusFilter(value: string) {
    this.kitchenStatusFilter = value || '';
    this.syncKitchenFilters();
  }

  setKitchenGroupBy(value: string) {
    this.kitchenGroupBy = value || 'region';
    this.record('kitchen group by', { field: this.kitchenGroupBy });
  }

  isKitchenColumnVisible(columnId: string) {
    return this.kitchenColumnVisibility[columnId] !== false;
  }

  setKitchenColumnVisible(columnId: string, visible: boolean) {
    this.kitchenColumnVisibility = cloneColumnVisibility(this.kitchenColumnVisibility, columnId, visible);
    this.record('kitchen visibility', this.kitchenColumnVisibility);
  }

  syncKitchenFilters() {
    var filters: any[] = [];

    if (this.kitchenRegionFilter) {
      filters.push({ id: 'region', value: this.kitchenRegionFilter });
    }

    if (this.kitchenStatusFilter) {
      filters.push({ id: 'status', value: this.kitchenStatusFilter });
    }

    this.kitchenColumnFilters = filters;
    this.record('kitchen filters', filters);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
