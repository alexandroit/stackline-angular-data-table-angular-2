import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'empty-example',
  templateUrl: 'src/app/examples/empty/empty.component.html'
})
export class EmptyExampleComponent extends TableExampleBase {
  title = 'Empty state';
  summary = 'Custom empty message when there are no rows.';
  orderColumns = getOrderColumns();
  emptyRows: any[] = [];
  htmlSnippet = `<stackline-data-table
  title="Empty project list"
  [columns]="orderColumns"
  [data]="emptyRows"
  noDataText="No projects were found">
</stackline-data-table>`;
  tsSnippet = `emptyRows = [];`;

  protected getDataSnippet() {
    return dataSnippet(this.emptyRows);
  }
}
