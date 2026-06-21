import { Component } from '@angular/core';
import { dataSnippet, getOrderColumns, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { AccessibilityKeyboardSnippets } from './accessibility-keyboard.snippets';

@Component({
  selector: 'accessibility-keyboard-example',
  templateUrl: 'src/app/examples/accessibility-keyboard/accessibility-keyboard.component.html'
})
export class AccessibilityKeyboardExampleComponent extends TableExampleBase {
  title = 'Accessibility and keyboard';
  summary = 'ARIA sort, labels, selected state, expanded state and row keyboard activation.';
  orderColumns = getOrderColumns();
  orders = orderRows;
  htmlSnippet = AccessibilityKeyboardSnippets.html;
  tsSnippet = AccessibilityKeyboardSnippets.ts;

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
