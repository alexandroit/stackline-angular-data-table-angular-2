import { Component } from '@angular/core';
import { buildLargeRows, dataSnippet, getLargeColumns } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'virtual-rows-example',
  templateUrl: 'src/app/examples/virtual-rows/virtual-rows.component.html'
})
export class VirtualRowsExampleComponent extends TableExampleBase {
  title = 'Virtual rows';
  summary = 'Render a window of a larger row set for heavy legacy screens.';
  largeColumns = getLargeColumns();
  largeRows = buildLargeRows();
  htmlSnippet = `<stackline-data-table
  title="Virtual rows"
  [columns]="largeColumns"
  [data]="largeRows"
  [virtualRows]="true"
  [virtualStartIndex]="20"
  [virtualRowCount]="12">
</stackline-data-table>`;
  tsSnippet = `largeRows = buildLargeRows();
virtualStartIndex = 20;
virtualRowCount = 12;`;

  protected getDataSnippet() {
    return dataSnippet(this.largeRows.slice(20, 24));
  }
}
