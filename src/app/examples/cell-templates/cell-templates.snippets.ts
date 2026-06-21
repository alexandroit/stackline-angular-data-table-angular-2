import { ExampleSnippets } from '../../shared/example-snippets';

export const CellTemplatesSnippets: ExampleSnippets = {
  html: `<template #statusCell let-value="value">
  <span class="status-badge">{{ value }}</span>
</template>

<stackline-data-table
  title="Template cells"
  [columns]="templateColumns"
  [data]="orders">
</stackline-data-table>`,
  ts: `@ViewChild('statusCell') statusCellTemplate: TemplateRef<any>;

ngAfterViewInit() {
  this.templateColumns = [
    { id: 'status', name: 'Status', selector: 'status', cellTemplate: this.statusCellTemplate }
  ];
}`
};
