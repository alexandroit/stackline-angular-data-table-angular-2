import { ExampleSnippets } from '../../shared/example-snippets';

export const ColumnPinningSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Column pinning"
  [columns]="advancedColumns"
  [data]="orders"
  [columnPinning]="{ left: ['order'], right: ['total'] }"
  [columnSizing]="columnSizingState">
</stackline-data-table>`,
  ts: `columnPinningState = { left: ['order'], right: ['total'] };
columnSizingState = { order: 130, customer: 240, total: 130 };`
};
