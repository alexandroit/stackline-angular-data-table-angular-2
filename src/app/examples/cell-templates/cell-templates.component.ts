import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { dataSnippet, formatTotal, orders as orderRows } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'cell-templates-example',
  templateUrl: 'src/app/examples/cell-templates/cell-templates.component.html'
})
export class CellTemplatesExampleComponent extends TableExampleBase implements AfterViewInit {
  @ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;
  @ViewChild('customerCell') customerCellTemplate: TemplateRef<any>;
  @ViewChild('totalCell') totalCellTemplate: TemplateRef<any>;

  title = 'Custom cell templates';
  summary = 'Angular TemplateRef cells for status, customer and money values.';
  orders = orderRows;
  templateColumns: any[] = [];
  htmlSnippet = `<template #statusCell let-value="value">
  <span class="status-badge">{{ value }}</span>
</template>

<stackline-data-table
  title="Template cells"
  [columns]="templateColumns"
  [data]="orders">
</stackline-data-table>`;
  tsSnippet = `@ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;

ngAfterViewInit() {
  this.templateColumns = [
    { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate }
  ];
}`;

  constructor(private changeDetector: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    this.templateColumns = [
      { id: 'order', name: 'Order', selector: 'order', sortable: true, width: '130px' },
      { id: 'customer', name: 'Customer', selector: 'customer', cellTemplate: this.customerCellTemplate, wrap: true, minWidth: '220px' },
      { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate, center: true, width: '120px' },
      { id: 'total', name: 'Total', selector: formatTotal, cellTemplate: this.totalCellTemplate, right: true, width: '130px' }
    ];
    this.changeDetector.detectChanges();
  }

  formatTotal(row: any) {
    return formatTotal(row);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
