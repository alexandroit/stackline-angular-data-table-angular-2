import { ExampleSnippets } from '../../shared/example-snippets';

export const DisabledSelectionSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Locked rows"
  [columns]="lockedColumns"
  [data]="lockedRows"
  [selectableRows]="true"
  [selectableRowDisabled]="isLocked">
</stackline-data-table>`,
  ts: `isLocked(row: any) {
  return !!row.locked;
}`
};
