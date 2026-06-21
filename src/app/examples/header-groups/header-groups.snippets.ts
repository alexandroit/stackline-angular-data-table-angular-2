import { ExampleSnippets } from '../../shared/example-snippets';

export const HeaderGroupsSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Header groups"
  [columns]="headerGroupColumns"
  [data]="orders">
</stackline-data-table>`,
  ts: `headerGroupColumns = [
  { name: 'Order', columns: [{ id: 'order', name: 'Order', selector: 'order' }] },
  { name: 'Customer', columns: [{ id: 'customer', name: 'Customer', selector: 'customer' }] }
];`
};
