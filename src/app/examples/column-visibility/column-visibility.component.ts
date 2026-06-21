import { Component } from '@angular/core';
import { cloneColumnVisibility, dataSnippet, getAdvancedColumns, orders as orderRows, visibilityColumns } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ColumnVisibilitySnippets } from './column-visibility.snippets';

@Component({
  selector: 'column-visibility-example',
  templateUrl: 'src/app/examples/column-visibility/column-visibility.component.html'
})
export class ColumnVisibilityExampleComponent extends TableExampleBase {
  title = 'Column visibility';
  summary = 'Hide or show columns with columnVisibility and hiddenColumns compatibility.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  visibilityColumns = visibilityColumns;
  columnVisibilityState: any = { channel: false };
  htmlSnippet = ColumnVisibilitySnippets.html;
  tsSnippet = ColumnVisibilitySnippets.ts;

  isDemoColumnVisible(columnId: string) {
    return this.columnVisibilityState[columnId] !== false;
  }

  setDemoColumnVisible(columnId: string, visible: boolean) {
    this.columnVisibilityState = cloneColumnVisibility(this.columnVisibilityState, columnId, visible);
    this.record('column visibility', this.columnVisibilityState);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
