import { ExampleSnippets } from '../../shared/example-snippets';

export const LoadingSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Loading state"
  [columns]="orderColumns"
  [data]="orders"
  [progressPending]="true">
</stackline-data-table>`,
  ts: `progressPending = true;`
};
