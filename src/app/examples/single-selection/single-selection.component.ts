import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { SingleSelectionSnippets } from './single-selection.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'single-selection-example',
  templateUrl: 'src/app/examples/single-selection/single-selection.component.html',
  styleUrls: ['src/app/examples/single-selection/single-selection.component.css']
})
export class SingleSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Single selection';
  summary = 'Radio-style selection for one active item.';
  ticketColumns = this.demoData.getTicketColumns();
  tickets = this.demoData.getTickets();
  htmlSnippet = SingleSelectionSnippets.html;
  tsSnippet = SingleSelectionSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.tickets.slice(0, 3));
  }
}
