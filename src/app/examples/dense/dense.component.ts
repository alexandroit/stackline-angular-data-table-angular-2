import { Component } from '@angular/core';
import { dataSnippet, getTicketColumns, tickets as ticketRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'dense-example',
  templateUrl: 'src/app/examples/dense/dense.component.html'
})
export class DenseExampleComponent extends TableExampleBase {
  title = 'Dense layout';
  summary = 'Compact row height for operation-heavy screens.';
  ticketColumns = getTicketColumns();
  tickets = ticketRows;
  htmlSnippet = `<stackline-data-table
  title="Dense operations table"
  [columns]="ticketColumns"
  [data]="tickets"
  [dense]="true">
</stackline-data-table>`;
  tsSnippet = `ticketColumns = getTicketColumns();
tickets = ticketRows;`;

  protected getDataSnippet() {
    return dataSnippet(this.tickets.slice(0, 3));
  }
}
