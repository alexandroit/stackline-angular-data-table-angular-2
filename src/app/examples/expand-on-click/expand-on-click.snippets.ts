import { ExampleSnippets } from '../../shared/example-snippets';

export const ExpandOnClickSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Expand on row click"
  [columns]="orderColumns"
  [data]="orders"
  [expandableRows]="true"
  [expandableRowsHideExpander]="true"
  [expandOnRowClicked]="true"
  [expandableRowTemplate]="orderDetail">
</stackline-data-table>`,
  ts: `// The row click output remains available while expansion is handled by the component.`
};
