import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { GroupingSnippets } from './grouping.snippets';

@Component({
  selector: 'grouping-example',
  templateUrl: 'src/app/examples/grouping/grouping.component.html'
})
export class GroupingExampleComponent extends TableExampleBase {
  title = 'Grouping';
  summary = 'Group rows by a column and expand or collapse each group.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  groupByField = 'region';
  htmlSnippet = GroupingSnippets.html;
  tsSnippet = GroupingSnippets.ts;

  setGroupByField(value: string) {
    this.groupByField = value || 'region';
    this.record('group by', { field: this.groupByField });
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
