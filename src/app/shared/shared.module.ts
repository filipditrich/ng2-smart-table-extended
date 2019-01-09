import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SmartTableExtendedModule } from '../../ng2-smart-table-extended';

import { HeaderComponent } from './components/header/header.component';
import { BasicExampleDataComponent } from './components/basic-example/basic-example-data.component';
import { BasicExampleComponent } from './components/basic-example/basic-example.component';

import { HighlightCodeDirective } from './directives/highlight.directive';
import {TestComponent} from "./components/basic-example/test.component";

const SHARED_COMPONENTS = [
  HeaderComponent,
  BasicExampleComponent,
  BasicExampleDataComponent,
];

const SHARED_DIRECTIVES = [
  HighlightCodeDirective,
];

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    Ng2SmartTableExtendedModule,
  ],
  declarations: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
    TestComponent,
  ],
  entryComponents: [
    TestComponent,
  ],
  exports: [
    ...SHARED_COMPONENTS,
    ...SHARED_DIRECTIVES,
  ],
})
export class SharedModule { }
