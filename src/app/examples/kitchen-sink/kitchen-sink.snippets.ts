import { ExampleSnippets } from '../../shared/example-snippets';

export const KitchenSinkSnippets: ExampleSnippets = {
  html: `<stackline-data-table
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
</stackline-data-table>`,
  ts: `kitchenGlobalFilter = 'paid';
kitchenRegionFilter = 'Canada';
kitchenColumnFilters = [{ id: 'region', value: 'Canada' }];
kitchenColumnVisibility = { channel: false };
kitchenColumnOrder = ['order', 'customer', 'status', 'region', 'total'];
kitchenGroupBy = 'region';`
};
