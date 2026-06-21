import { ExampleSnippets } from '../../shared/example-snippets';

export const RowEventsSnippets: ExampleSnippets = {
  html: `<stackline-data-table
  title="Row events"
  [columns]="orderColumns"
  [data]="orders"
  (rowClicked)="record('rowClicked', $event)"
  (rowDoubleClicked)="record('rowDoubleClicked', $event)"
  (rowMouseEnter)="record('rowMouseEnter', $event)">
</stackline-data-table>`,
  ts: `record(type: string, value: any) {
  this.events.unshift(type + ': ' + JSON.stringify(value));
}`
};
