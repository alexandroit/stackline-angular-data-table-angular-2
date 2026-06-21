import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

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
  htmlSnippet = `<label>
  Group by
  <select [value]="groupByField" (change)="setGroupByField($event.target.value)">
    <option value="region">Region</option>
    <option value="status">Status</option>
    <option value="channel">Channel</option>
  </select>
</label>

<stackline-data-table
  title="Grouped rows"
  [columns]="advancedColumns"
  [data]="orders"
  [groupBy]="groupByField">
</stackline-data-table>`;
  tsSnippet = `groupByField = 'region';

setGroupByField(value: string) {
  this.groupByField = value || 'region';
}`;

  setGroupByField(value: string) {
    this.groupByField = value || 'region';
    this.record('group by', { field: this.groupByField });
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
