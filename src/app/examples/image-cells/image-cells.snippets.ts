import { ExampleSnippets } from '../../shared/example-snippets';

export const ImageCellsSnippets: ExampleSnippets = {
  html: `<template #productCell let-row="row">
  <span class="product-cell">
    <img [src]="row.image" [alt]="row.name" />
    <span>
      <strong>{{ row.name }}</strong>
      <small>{{ row.category }}</small>
    </span>
  </span>
</template>

<stackline-data-table
  title="Product media table"
  [columns]="imageColumns"
  [data]="products">
</stackline-data-table>`,
  ts: `@ViewChild('productCell') productCellTemplate: TemplateRef<any>;

ngAfterViewInit() {
  this.imageColumns = [
    { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate },
    { id: 'owner', name: 'Owner', selector: 'owner' },
    { id: 'stock', name: 'Stock', selector: 'stock', right: true }
  ];
}`
};
