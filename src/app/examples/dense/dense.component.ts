import { Component } from '@angular/core';
import { dataSnippet, getTicketColumns, tickets as ticketRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { DenseSnippets } from './dense.snippets';

@Component({
  selector: 'dense-example',
  templateUrl: 'src/app/examples/dense/dense.component.html'
})
export class DenseExampleComponent extends TableExampleBase {
  title = 'Dense layout';
  summary = 'Compact row height for operation-heavy screens.';
  ticketColumns = getTicketColumns();
  tickets = ticketRows;
  htmlSnippet = DenseSnippets.html;
  tsSnippet = DenseSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.tickets.slice(0, 3));
  }
}
