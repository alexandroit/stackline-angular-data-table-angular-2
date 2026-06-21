import { Component } from '@angular/core';
import { dataSnippet, getLockedColumns, lockedRows as rows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'disabled-selection-example',
  templateUrl: 'src/app/examples/disabled-selection/disabled-selection.component.html'
})
export class DisabledSelectionExampleComponent extends TableExampleBase {
  title = 'Disabled selectable rows';
  summary = 'Block selection for locked rows while keeping the table interactive.';
  lockedColumns = getLockedColumns();
  lockedRows = rows;
  htmlSnippet = `<stackline-data-table
  title="Locked rows"
  [columns]="lockedColumns"
  [data]="lockedRows"
  [selectableRows]="true"
  [selectableRowDisabled]="isLocked">
</stackline-data-table>`;
  tsSnippet = `isLocked(row: any) {
  return !!row.locked;
}`;

  isLocked(row: any) {
    return !!row.locked;
  }

  protected getDataSnippet() {
    return dataSnippet(this.lockedRows);
  }
}
