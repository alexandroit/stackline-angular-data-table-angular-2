import { Component } from '@angular/core';
import { dataSnippet, getInventoryColumns, inventory as inventoryRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { SortingSnippets } from './sorting.snippets';

@Component({
  selector: 'sorting-example',
  templateUrl: 'src/app/examples/sorting/sorting.component.html'
})
export class SortingExampleComponent extends TableExampleBase {
  title = 'Sortable columns';
  summary = 'Client-side sorting with a default descending sort.';
  inventoryColumns = getInventoryColumns();
  inventory = inventoryRows;
  htmlSnippet = SortingSnippets.html;
  tsSnippet = SortingSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.inventory.slice(0, 3));
  }
}
