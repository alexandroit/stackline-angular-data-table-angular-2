import { ExampleSnippets } from '../../shared/example-snippets';

export const DarkSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Dark theme"
  theme="dark"
  [columns]="revenueColumns"
  [data]="revenue"
  [pagination]="true">
</stackline-data-table>`,
  ts: `revenueColumns = getRevenueColumns();
revenue = revenueRows;`
};
