import { Component } from '@angular/core';
import { dataSnippet, getHeaderGroupColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { HeaderGroupsSnippets } from './header-groups.snippets';

@Component({
  selector: 'header-groups-example',
  templateUrl: 'src/app/examples/header-groups/header-groups.component.html'
})
export class HeaderGroupsExampleComponent extends TableExampleBase {
  title = 'Header groups';
  summary = 'Use nested column definitions to render grouped headers.';
  headerGroupColumns = getHeaderGroupColumns();
  orders = orderRows;
  htmlSnippet = HeaderGroupsSnippets.html;
  tsSnippet = HeaderGroupsSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
