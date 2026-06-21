import { ExampleSnippets } from '../../shared/example-snippets';

export const ResponsiveWrapSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Responsive wrapped content"
  [columns]="wrappedColumns"
  [data]="longTextRows"
  [responsive]="true">
</stackline-data-table>`,
  ts: `wrappedColumns = getWrappedColumns();
longTextRows = rows;`
};
