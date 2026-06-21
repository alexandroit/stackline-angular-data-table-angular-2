import { Component } from '@angular/core';
import { dataSnippet, getTicketColumns, tickets as ticketRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'single-selection-example',
  templateUrl: 'src/app/examples/single-selection/single-selection.component.html'
})
export class SingleSelectionExampleComponent extends TableExampleBase {
  title = 'Single selection';
  summary = 'Radio-style selection for one active item.';
  ticketColumns = getTicketColumns();
  tickets = ticketRows;
  htmlSnippet = `<stackline-data-table
  title="Support queue"
  [columns]="ticketColumns"
  [data]="tickets"
  [selectableRows]="true"
  [selectableRowsSingle]="true"
  keyField="ticket">
</stackline-data-table>`;
  tsSnippet = `ticketColumns = getTicketColumns();
tickets = ticketRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.tickets.slice(0, 3));
  }
}
