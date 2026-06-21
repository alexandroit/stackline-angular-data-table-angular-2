import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'accessibility-keyboard-example',
  templateUrl: 'src/app/examples/accessibility-keyboard/accessibility-keyboard.component.html'
})
export class AccessibilityKeyboardExampleComponent extends TableExampleBase {
  title = 'Accessibility and keyboard';
  summary = 'ARIA sort, labels, selected state, expanded state and row keyboard activation.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = `<stackline-data-table
  title="Accessibility keyboard contract"
  ariaLabel="Accessibility keyboard orders"
  [columns]="orderColumns"
  [data]="orders"
  [selectableRows]="true"
  [selectableRowsHighlight]="true"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail"
  [keyboardRows]="true"
  [pagination]="true"
  [paginationPerPage]="5">
</stackline-data-table>`;
  tsSnippet = `// Native inputs/buttons keep their own keyboard behavior.
// When a data row receives focus, Enter or Space activates the row:
// selectable rows toggle selection, expandable rows toggle details.
// Headers expose aria-sort and selection controls expose aria-checked.
keyboardRows = true;`;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
