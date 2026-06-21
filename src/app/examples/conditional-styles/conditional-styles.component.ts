import { Component } from '@angular/core';
import { dataSnippet, getInventoryColumns, inventory as inventoryRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'conditional-styles-example',
  templateUrl: 'src/app/examples/conditional-styles/conditional-styles.component.html'
})
export class ConditionalStylesExampleComponent extends TableExampleBase {
  title = 'Conditional styles';
  summary = 'Apply row classes or styles from row data.';
  inventoryColumns = getInventoryColumns();
  inventory = inventoryRows;
  inventoryStyles = [
    {
      when: function(row: any) {
        return row.stock < 10;
      },
      className: 'row-warning'
    }
  ];
  htmlSnippet = `<stackline-data-table
  title="Inventory risk"
  [columns]="inventoryColumns"
  [data]="inventory"
  [conditionalRowStyles]="inventoryStyles">
</stackline-data-table>`;
  tsSnippet = `inventoryStyles = [{
  when: function(row) { return row.stock < 10; },
  className: 'row-warning'
}];`;

  protected getDataSnippet() {
    return dataSnippet(this.inventory.slice(0, 3));
  }
}
