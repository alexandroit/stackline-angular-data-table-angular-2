import { Component, OnInit } from '@angular/core';
import {
  createDataTableController,
  DataTableColumn,
  HeadlessDataTableController
} from '@stackline/angular-data-table-component';
import { dataSnippet } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';

@Component({
  selector: 'headless-html-example',
  templateUrl: 'src/app/examples/headless-html/headless-html.component.html'
})
export class HeadlessHtmlExampleComponent extends TableExampleBase implements OnInit {
  title = 'Headless custom HTML';
  summary = 'Use the exported table controller while rendering every element with custom application HTML.';
  searchText = '';
  statusFilter = '';
  headless: HeadlessDataTableController;
  columns: DataTableColumn[] = [
    { id: 'name', name: 'Project', selector: 'name', sortable: true },
    { id: 'status', name: 'Status', selector: 'status', sortable: true },
    { id: 'owner', name: 'Owner', selector: 'owner', sortable: true },
    { id: 'score', name: 'Score', selector: 'score', sortable: true }
  ];
  rows = [
    { id: 1, name: 'Mobile audit', status: 'Ready', owner: 'Maya', score: 92 },
    { id: 2, name: 'Billing export', status: 'Review', owner: 'Theo', score: 76 },
    { id: 3, name: 'Support queue', status: 'Ready', owner: 'Iris', score: 88 },
    { id: 4, name: 'Security report', status: 'Blocked', owner: 'Noah', score: 63 },
    { id: 5, name: 'Warehouse sync', status: 'Ready', owner: 'Lena', score: 81 },
    { id: 6, name: 'Invoice matching', status: 'Review', owner: 'Maya', score: 74 }
  ];
  htmlSnippet = `<section class="headless-board" role="grid" aria-label="Headless projects">
  <header class="headless-toolbar">
    <input
      type="search"
      [value]="searchText"
      (input)="setSearch($event.target.value)" />
    <button type="button" (click)="headless.toggleAllVisibleRows()">
      Toggle visible
    </button>
  </header>

  <div class="headless-sortbar">
    <button
      *ngFor="let column of headless.visibleColumns"
      type="button"
      [attr.aria-sort]="headless.getAriaSort(column)"
      (click)="headless.toggleSort(column)">
      {{ column.name }}
    </button>
  </div>

  <article
    *ngFor="let row of headless.displayedRows"
    role="row"
    tabindex="0"
    [class.selected]="headless.isRowSelected(row)"
    [attr.aria-selected]="headless.isRowSelected(row)"
    (click)="headless.toggleRowSelection(row)">
    <strong>{{ row.name }}</strong>
    <span>{{ row.status }}</span>
    <small>{{ row.owner }} · {{ row.score }}</small>
  </article>
</section>`;
  tsSnippet = `import { createDataTableController } from '@stackline/angular-data-table-component';

ngOnInit() {
  this.headless = createDataTableController({
    columns: this.columns,
    data: this.rows,
    selectableRows: true,
    pagination: true,
    perPage: 4
  });
}

setSearch(value: string) {
  this.searchText = value || '';
  this.headless.setGlobalFilter(this.searchText);
}`;

  ngOnInit() {
    this.headless = createDataTableController({
      columns: this.columns,
      data: this.rows,
      selectableRows: true,
      pagination: true,
      perPage: 4,
      onSelectionChange: (event: any) => this.record('headless selection', event),
      onSortChange: (event: any) => this.record('headless sort', {
        column: event.column.id,
        direction: event.direction
      }),
      onPageChange: (event: any) => this.record('headless page', event),
      onRowsPerPageChange: (event: any) => this.record('headless rowsPerPage', event)
    });
  }

  setSearch(value: string) {
    this.searchText = value || '';
    this.headless.setGlobalFilter(this.searchText);
    this.record('headless search', { value: this.searchText });
  }

  setStatus(value: string) {
    this.statusFilter = value || '';
    this.headless.setColumnFilter('status', this.statusFilter);
    this.record('headless status', { value: this.statusFilter });
  }

  activateCard(event: KeyboardEvent, row: any) {
    if (event.keyCode !== 13 && event.keyCode !== 32) {
      return;
    }

    event.preventDefault();
    this.headless.toggleRowSelection(row);
  }

  protected getDataSnippet() {
    return dataSnippet({
      rows: this.rows.slice(0, 3),
      state: {
        totalRows: this.headless ? this.headless.totalRows : this.rows.length,
        currentPage: this.headless ? this.headless.currentPage : 1,
        rowsPerPage: this.headless ? this.headless.rowsPerPage : 4,
        selectedCount: this.headless ? this.headless.selectedCount : 0
      }
    } as any);
  }
}
