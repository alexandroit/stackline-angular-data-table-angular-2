import { Component } from '@angular/core';
import { dataSnippet, getInventoryColumns, inventory as inventoryRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'sorting-example',
  templateUrl: 'src/app/examples/sorting/sorting.component.html'
})
export class SortingExampleComponent extends TableExampleBase {
  title = 'Sortable columns';
  summary = 'Client-side sorting with a default descending sort.';
  inventoryColumns = getInventoryColumns();
  inventory = inventoryRows;
  htmlSnippet = `<stackline-data-table
  title="Sortable inventory"
  [columns]="inventoryColumns"
  [data]="inventory"
  defaultSortFieldId="stock"
  [defaultSortAsc]="false"
  [striped]="true"
  [highlightOnHover]="true">
</stackline-data-table>`;
  tsSnippet = `inventoryColumns = [
  { id: 'sku', name: 'SKU', selector: 'sku', sortable: true },
  { id: 'stock', name: 'Stock', selector: 'stock', sortable: true, right: true }
];`;

  protected getDataSnippet() {
    return dataSnippet(this.inventory.slice(0, 3));
  }
}
