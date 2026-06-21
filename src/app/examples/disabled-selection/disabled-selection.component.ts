import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { DisabledSelectionSnippets } from './disabled-selection.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'disabled-selection-example',
  templateUrl: 'src/app/examples/disabled-selection/disabled-selection.component.html',
  styleUrls: ['src/app/examples/disabled-selection/disabled-selection.component.css']
})
export class DisabledSelectionExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Disabled selectable rows';
  summary = 'Block selection for locked rows while keeping the table interactive.';
  lockedColumns = this.demoData.getLockedColumns();
  lockedRows = this.demoData.getLockedRows();
  htmlSnippet = DisabledSelectionSnippets.html;
  tsSnippet = DisabledSelectionSnippets.ts;

  isLocked(row: any) {
    return !!row.locked;
  }

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.lockedRows);
  }
}
