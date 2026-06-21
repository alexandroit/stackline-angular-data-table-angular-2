import { ExampleSnippets } from '../../shared/example-snippets';

export const VirtualRowsSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Virtual rows"
  [columns]="largeColumns"
  [data]="largeRows"
  [virtualRows]="true"
  [virtualStartIndex]="20"
  [virtualRowCount]="12">
</stackline-data-table>`,
  ts: `largeRows = buildLargeRows();
virtualStartIndex = 20;
virtualRowCount = 12;`
};
