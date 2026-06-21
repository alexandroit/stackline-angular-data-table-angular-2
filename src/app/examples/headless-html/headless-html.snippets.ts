import { ExampleSnippets } from '../../shared/example-snippets';

export const HeadlessHtmlSnippets: ExampleSnippets = {
  html: `<section class="headless-board" role="grid" aria-label="Headless projects">
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
</section>`,
  ts: `import { createDataTableController } from '@stackline/angular-data-table-component';

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
}`
};
