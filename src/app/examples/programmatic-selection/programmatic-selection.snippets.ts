import { ExampleSnippets } from '../../shared/example-snippets';

export const ProgrammaticSelectionSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="High priority tickets"
  [columns]="ticketColumns"
  [data]="tickets"
  [selectableRows]="true"
  [selectableRowSelected]="isHighPriority">
</stackline-data-table>`,
  ts: `isHighPriority(row: any) {
  return row.priority === 'High';
}`
};
