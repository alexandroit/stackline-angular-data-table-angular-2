import { Component } from '@angular/core';
import { dataSnippet, getTicketColumns, tickets as ticketRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ProgrammaticSelectionSnippets } from './programmatic-selection.snippets';

@Component({
  selector: 'programmatic-selection-example',
  templateUrl: 'src/app/examples/programmatic-selection/programmatic-selection.component.html'
})
export class ProgrammaticSelectionExampleComponent extends TableExampleBase {
  title = 'Programmatic selection';
  summary = 'Preselect rows from a predicate supplied by the app.';
  ticketColumns = getTicketColumns();
  tickets = ticketRows;
  htmlSnippet = ProgrammaticSelectionSnippets.html;
  tsSnippet = ProgrammaticSelectionSnippets.ts;

  isHighPriority(row: any) {
    return row.priority === 'High';
  }

  protected getDataSnippet() {
    return dataSnippet(this.tickets.slice(0, 3));
  }
}
