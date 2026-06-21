import { ExampleSnippets } from '../../shared/example-snippets';

export const ColumnVisibilitySnippets: ExampleSnippets = {
  html: `<label *ngFor="let column of visibilityColumns">
  <input
    type="checkbox"
    [checked]="isDemoColumnVisible(column.id)"
    (change)="setDemoColumnVisible(column.id, $event.target.checked)" />
  {{ column.label }}
</label>

<stackline-data-table
  title="Column visibility"
  [columns]="advancedColumns"
  [data]="orders"
  [columnVisibility]="columnVisibilityState">
</stackline-data-table>`,
  ts: `columnVisibilityState = { channel: false };

setDemoColumnVisible(columnId: string, visible: boolean) {
  this.columnVisibilityState = cloneColumnVisibility(this.columnVisibilityState, columnId, visible);
}`
};
