import { Component, OnInit } from '@angular/core';
import { EXAMPLE_MENU, ExampleMenuItem } from './shared/example-menu';

@Component({
  selector: 'stackline-test',
  templateUrl: 'src/app/app.component.html',
  styleUrls: ['src/app/app.component.css']
})
export class AppComponent implements OnInit {
  angularVersion = '2.4.10';
  packageVersion = '2.0.0';
  stackBlitzUrl = 'https://stackblitz.com/github/alexandroit/stackline-angular-data-table-angular-2?file=src%2Fapp%2Fexamples%2Fbasic%2Fbasic.component.ts&initialpath=%2Fbasic&startScript=start';
  activeExample = 'basic';
  examples: ExampleMenuItem[] = EXAMPLE_MENU;

  ngOnInit() {
    this.activeExample = this.getInitialExample();
  }

  setExample(example: string) {
    this.activeExample = example;

    if (window && window.location) {
      window.location.hash = '#/' + example;
    }
  }

  get selectedExample() {
    var i: number;

    for (i = 0; i < this.examples.length; i += 1) {
      if (this.examples[i].id === this.activeExample) {
        return this.examples[i];
      }
    }

    return this.examples[0];
  }

  private getInitialExample() {
    var hash = window && window.location ? window.location.hash : '';
    var pathname = window && window.location ? window.location.pathname : '';
    var id = hash || pathname;
    var i: number;

    if (id.indexOf('#/') === 0) {
      id = id.slice(2);
    } else if (id.indexOf('#') === 0) {
      id = id.slice(1);
    }

    if (id.indexOf('/') === 0) {
      id = id.slice(1);
    }

    if (id.indexOf('/') > -1) {
      id = id.split('/')[0];
    }

    for (i = 0; i < this.examples.length; i += 1) {
      if (this.examples[i].id === id) {
        return id;
      }
    }

    return 'basic';
  }
}
