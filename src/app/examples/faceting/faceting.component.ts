import { Component } from '@angular/core';
import { dataSnippet, getAdvancedColumns, orders as orderRows, statusOptions } from '../../shared/table-demo-data';
import { TableExampleBase } from '../../shared/table-example-base';
import { FacetingSnippets } from './faceting.snippets';

@Component({
  selector: 'faceting-example',
  templateUrl: 'src/app/examples/faceting/faceting.component.html'
})
export class FacetingExampleComponent extends TableExampleBase {
  title = 'Faceted values';
  summary = 'Read unique value counts from the component after filtering.';
  advancedColumns = getAdvancedColumns();
  orders = orderRows;
  statusOptions = statusOptions;
  facetFilterText = '';
  facetStatusFilterValue = '';
  facetColumnFilters: any[] = [];
  htmlSnippet = FacetingSnippets.html;
  tsSnippet = FacetingSnippets.ts;

  setFacetFilter(value: string) {
    this.facetFilterText = value || '';
    this.record('facet search', { value: this.facetFilterText });
  }

  setFacetStatusFilter(value: string) {
    this.facetStatusFilterValue = value || '';
    this.facetColumnFilters = this.facetStatusFilterValue ? [{ id: 'status', value: this.facetStatusFilterValue }] : [];
    this.record('facet status', this.facetColumnFilters);
  }

  getFacetSummary(table: any, columnId: string) {
    var facets = table && table.getColumnUniqueValues ? table.getColumnUniqueValues(columnId) : {};
    return JSON.stringify(facets, null, 2);
  }

  protected getDataSnippet() {
    return dataSnippet(this.orders.slice(0, 3));
  }
}
