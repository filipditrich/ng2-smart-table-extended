import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CellModule } from './components/cell/cell.module';
import { FilterModule } from './components/filter/filter.module';
import { PagerModule } from './components/pager/pager.module';
import { TBodyModule } from './components/tbody/tbody.module';
import { THeadModule } from './components/thead/thead.module';

import { Ng2SmartTableExtendedComponent } from './ng2-smart-table-extended.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CellModule,
    FilterModule,
    PagerModule,
    TBodyModule,
    THeadModule,
  ],
  declarations: [
    Ng2SmartTableExtendedComponent,
  ],
  exports: [
    Ng2SmartTableExtendedComponent,
  ],
})
export class Ng2SmartTableExtendedModule {
}
