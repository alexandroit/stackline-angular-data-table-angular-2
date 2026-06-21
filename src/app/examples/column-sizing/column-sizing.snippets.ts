import { ExampleSnippets } from '../../shared/example-snippets';

export const ColumnSizingSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Column sizing"
  [columns]="advancedColumns"
  [data]="orders"
  [columnSizing]="wideColumnSizingState">
</stackline-data-table>`,
  ts: `wideColumnSizingState = { order: 180, customer: 320, region: 180, total: 180 };`
};
