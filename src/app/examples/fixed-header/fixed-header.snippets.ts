import { ExampleSnippets } from '../../shared/example-snippets';

export const FixedHeaderSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Fixed header revenue"
  [columns]="revenueColumns"
  [data]="revenue"
  [fixedHeader]="true"
  fixedHeaderScrollHeight="320px">
</stackline-data-table>`,
  ts: `revenueColumns = getRevenueColumns();
revenue = revenueRows;`
};
