import { ExampleSnippets } from '../../shared/example-snippets';

export const RowPinningSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Row pinning"
  [columns]="advancedColumns"
  [data]="orders"
  [pinnedTopRows]="topPinnedOrders"
  [pinnedBottomRows]="bottomPinnedOrders">
</stackline-data-table>`,
  ts: `topPinnedOrders = [orders[6]];
bottomPinnedOrders = [orders[1]];`
};
