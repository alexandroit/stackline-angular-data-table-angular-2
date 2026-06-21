import { Component } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { HeaderGroupsSnippets } from './header-groups.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'header-groups-example',
  templateUrl: 'src/app/examples/header-groups/header-groups.component.html',
  styleUrls: ['src/app/examples/header-groups/header-groups.component.css']
})
export class HeaderGroupsExampleComponent extends TableExampleBase {
  constructor(protected demoData: TableDemoDataService) {
    super();
  }

  title = 'Header groups';
  summary = 'Use nested column definitions to render grouped headers.';
  headerGroupColumns = this.demoData.getHeaderGroupColumns();
  orders = this.demoData.getOrders();
  htmlSnippet = HeaderGroupsSnippets.html;
  tsSnippet = HeaderGroupsSnippets.ts;

  protected getDataSnippet() {
    return this.demoData.dataSnippet(this.orders.slice(0, 3));
  }
}
