import { Component } from '@angular/core';
import { dataSnippet, getLockedColumns, lockedRows as rows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { DisabledSelectionSnippets } from './disabled-selection.snippets';

@Component({
  selector: 'disabled-selection-example',
  templateUrl: 'src/app/examples/disabled-selection/disabled-selection.component.html'
})
export class DisabledSelectionExampleComponent extends TableExampleBase {
  title = 'Disabled selectable rows';
  summary = 'Block selection for locked rows while keeping the table interactive.';
  lockedColumns = getLockedColumns();
  lockedRows = rows;
  htmlSnippet = DisabledSelectionSnippets.html;
  tsSnippet = DisabledSelectionSnippets.ts;

  isLocked(row: any) {
    return !!row.locked;
  }

  protected getDataSnippet() {
    return dataSnippet(this.lockedRows);
  }
}
