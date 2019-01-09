import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { DefaultEditor } from 'ng2-smart-table-extended';

@Component({
  selector: 'nga-ns-player-picker',
  template: `DICK SHIT ::: {{test}}`,
})
export class TestComponent extends DefaultEditor implements AfterViewInit {

  @Input() test;

  constructor() {
    super();
  }

  ngAfterViewInit() {
    console.log(this.cell.getDataSet().getData());
  }

}
