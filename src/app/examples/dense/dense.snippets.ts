import { ExampleSnippets } from '../../shared/example-snippets';

export const DenseSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Dense operations table"
  [columns]="ticketColumns"
  [data]="tickets"
  [dense]="true">
</stackline-data-table>`,
  ts: `ticketColumns = getTicketColumns();
tickets = ticketRows;`
};
