import { ExampleSnippets } from '../../shared/example-snippets';

export const ExpandableRowsSnippets: ExampleSnippets = {
  html: `<template #orderDetail let-row="row">
  <div>{{ row.customer }} - {{ row.notes }}</div>
</template>

<stackline-data-table
  title="Expandable order details"
  [columns]="orderColumns"
  [data]="orders"
  [expandableRows]="true"
  [expandableRowTemplate]="orderDetail">
</stackline-data-table>`,
  ts: `isLargeOrder(row: any) {
  return row.total > 2000;
}`
};
