import { Component } from '@angular/core';
import { dataSnippet, getTicketColumns, tickets as ticketRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'programmatic-selection-example',
  templateUrl: 'src/app/examples/programmatic-selection/programmatic-selection.component.html'
})
export class ProgrammaticSelectionExampleComponent extends TableExampleBase {
  title = 'Programmatic selection';
  summary = 'Preselect rows from a predicate supplied by the app.';
  ticketColumns = getTicketColumns();
  tickets = ticketRows;
  htmlSnippet = `<stackline-data-table
  title="High priority tickets"
  [columns]="ticketColumns"
  [data]="tickets"
  [selectableRows]="true"
  [selectableRowSelected]="isHighPriority">
</stackline-data-table>`;
  tsSnippet = `isHighPriority(row: any) {
  return row.priority === 'High';
}`;

  isHighPriority(row: any) {
    return row.priority === 'High';
  }

  protected getDataSnippet() {
    return dataSnippet(this.tickets.slice(0, 3));
  }
}
