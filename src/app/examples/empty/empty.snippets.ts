import { ExampleSnippets } from '../../shared/example-snippets';

export const EmptySnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Empty project list"
  [columns]="orderColumns"
  [data]="emptyRows"
  noDataText="No projects were found">
</stackline-data-table>`,
  ts: `emptyRows = [];`
};
