import { ExampleSnippets } from '../../shared/example-snippets';

export const AccessibilityKeyboardSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Accessibility keyboard contract"
  ariaLabel="Accessibility keyboard orders"
  [columns]="orderColumns"
  [data]="orders"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail"
  [keyboardRows]="true"
  [pagination]="true"
  [paginationPerPage]="5">
</stackline-data-table>`,
  ts: `// Native inputs/buttons keep their own keyboard behavior.
// When a data row receives focus, Enter or Space activates the row:
// selectable rows toggle selection, expandable rows toggle details.
// Headers expose aria-sort and selection controls expose aria-checked.
keyboardRows = true;`
};
