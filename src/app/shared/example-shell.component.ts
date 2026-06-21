import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'example-shell',
  templateUrl: 'src/app/shared/example-shell.component.html',
  styleUrls: ['src/app/shared/example-shell.component.css']
})
export class ExampleShellComponent {
  @Input() title: string;
  @Input() summary: string;
  @Input() htmlSnippet: string;
  @Input() tsSnippet: string;
  @Input() dataSnippet: string;
  @Input() events: string[];
  @Output() clear = new EventEmitter<any>();

  get eventLogText() {
    return (this.events || []).join('\n');
  }
}
