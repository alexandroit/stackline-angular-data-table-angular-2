import { Component, AfterViewInit, ChangeDetectorRef, TemplateRef, ViewChild } from '@angular/core';
import { TableExampleBase } from '../../shared/table-example-base';
import { ImageCellsSnippets } from './image-cells.snippets';
import { TableDemoDataService } from '../../services/table-demo-data.service';

@Component({
  selector: 'image-cells-example',
  templateUrl: 'src/app/examples/image-cells/image-cells.component.html',
  styleUrls: ['src/app/examples/image-cells/image-cells.component.css']
})
export class ImageCellsExampleComponent extends TableExampleBase implements AfterViewInit {
  @ViewChild('productCell') productCellTemplate: TemplateRef<any>;
  @ViewChild('stockCell') stockCellTemplate: TemplateRef<any>;

  title = 'Image cells';
  summary = 'Product and user-media cells rendered with Angular templates and local image assets.';
  imageColumns: any[] = [];
  products = this.demoData.getProducts('src/app/assets/products');
  htmlSnippet = ImageCellsSnippets.html;
  tsSnippet = ImageCellsSnippets.ts;

  constructor(private changeDetector: ChangeDetectorRef, protected demoData: TableDemoDataService) {
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
    return this.demoData.dataSnippet(this.products);
  }
}
