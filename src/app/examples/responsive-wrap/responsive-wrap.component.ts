import { Component } from '@angular/core';
import { dataSnippet, getWrappedColumns, longTextRows as rows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'responsive-wrap-example',
  templateUrl: 'src/app/examples/responsive-wrap/responsive-wrap.component.html'
})
export class ResponsiveWrapExampleComponent extends TableExampleBase {
  title = 'Responsive and wrapped cells';
  summary = 'Long values wrap while the responsive shell protects the layout.';
  wrappedColumns = getWrappedColumns();
  longTextRows = rows;
  htmlSnippet = `<stackline-data-table
  title="Responsive wrapped content"
  [columns]="wrappedColumns"
  [data]="longTextRows"
  [responsive]="true">
</stackline-data-table>`;
  tsSnippet = `wrappedColumns = getWrappedColumns();
longTextRows = rows;`;

  protected getDataSnippet() {
    return dataSnippet(this.longTextRows);
  }
}
