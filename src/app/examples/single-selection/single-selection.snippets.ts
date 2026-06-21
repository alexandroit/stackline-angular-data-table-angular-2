import { ExampleSnippets } from '../../shared/example-snippets';

export const SingleSelectionSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Support queue"
  [columns]="ticketColumns"
  [data]="tickets"
  [selectableRows]="true"
  [selectableRowsSingle]="true"
  keyField="ticket">
</stackline-data-table>`,
  ts: `ticketColumns = getTicketColumns();
tickets = ticketRows;`
};
