import { ExampleSnippets } from '../../shared/example-snippets';

export const ConditionalStylesSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Inventory risk"
  [columns]="inventoryColumns"
  [data]="inventory"
  [conditionalRowStyles]="inventoryStyles">
</stackline-data-table>`,
  ts: `inventoryStyles = [{
  when: function(row) { return row.stock < 10; },
  className: 'row-warning'
}];`
};
