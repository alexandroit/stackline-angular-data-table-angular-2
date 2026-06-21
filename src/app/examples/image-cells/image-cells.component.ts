import { AfterViewInit, ChangeDetectorRef, Component, TemplateRef, ViewChild } from '@angular/core';
import { dataSnippet } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { ImageCellsSnippets } from './image-cells.snippets';

@Component({
  selector: 'image-cells-example',
  templateUrl: 'src/app/examples/image-cells/image-cells.component.html'
})
export class ImageCellsExampleComponent extends TableExampleBase implements AfterViewInit {
  @ViewChild('productCell') productCellTemplate: TemplateRef<any>;
  @ViewChild('stockCell') stockCellTemplate: TemplateRef<any>;

  title = 'Image cells';
  summary = 'Product and user-media cells rendered with Angular templates and local image assets.';
  imageColumns: any[] = [];
  products = [
    { id: 1, name: 'Studio Camera', category: 'Media kit', stock: 18, owner: 'Maya', image: 'src/app/assets/products/camera.svg' },
    { id: 2, name: 'Audio Headphones', category: 'Support desk', stock: 7, owner: 'Theo', image: 'src/app/assets/products/headphones.svg' },
    { id: 3, name: 'Mechanical Keyboard', category: 'Workspace', stock: 31, owner: 'Iris', image: 'src/app/assets/products/keyboard.svg' },
    { id: 4, name: 'Ops Watch', category: 'Field team', stock: 12, owner: 'Noah', image: 'src/app/assets/products/watch.svg' }
  ];
  htmlSnippet = ImageCellsSnippets.html;
  tsSnippet = ImageCellsSnippets.ts;

  constructor(private changeDetector: ChangeDetectorRef) {
    super();
  }

  ngAfterViewInit() {
    this.imageColumns = [
      { id: 'product', name: 'Product', selector: 'name', cellTemplate: this.productCellTemplate, sortable: true, minWidth: '280px' },
      { id: 'category', name: 'Category', selector: 'category', sortable: true, width: '180px' },
      { id: 'owner', name: 'Owner', selector: 'owner', sortable: true, width: '140px' },
      { id: 'stock', name: 'Stock', selector: 'stock', cellTemplate: this.stockCellTemplate, sortable: true, right: true, width: '120px' }
    ];
    this.changeDetector.detectChanges();
  }

  protected getDataSnippet() {
    return dataSnippet(this.products);
  }
}
