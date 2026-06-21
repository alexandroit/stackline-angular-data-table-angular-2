import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { EmptySnippets } from './empty.snippets';

@Component({
  selector: 'empty-example',
  templateUrl: 'src/app/examples/empty/empty.component.html'
})
export class EmptyExampleComponent extends TableExampleBase {
  title = 'Empty state';
  summary = 'Custom empty message when there are no rows.';
  orderColumns = getOrderColumns();
  emptyRows: any[] = [];
  htmlSnippet = EmptySnippets.html;
  tsSnippet = EmptySnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.emptyRows);
  }
}
