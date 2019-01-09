import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ServerDataSource } from '../../../../ng2-smart-table-extended';

@Component({
  selector: 'advanced-example-server',
  template: `
    <ng2-smart-table-extended [settings]="settings" [source]="source"></ng2-smart-table-extended>
  `,
})
export class AdvancedExampleServerComponent {

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      albumId: {
        title: 'Album',
      },
      title: {
        title: 'Title',
      },
      url: {
        title: 'Url',
      },
    },
  };

  source: ServerDataSource;

  constructor(http: HttpClient) {
    this.source = new ServerDataSource(http, { endPoint: 'https://jsonplaceholder.typicode.com/photos' });
  }
}
