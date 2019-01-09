import { Component, Input, Output, EventEmitter, OnChanges, ChangeDetectionStrategy } from '@angular/core';

import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';

@Component({
  selector: 'ng2-st-tbody-edit-delete',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <a href="#" *ngIf="isActionEdit"
       class="ng2-smart-action ng2-smart-action-edit-edit {{ editRowClassFunction(row) }}"
       [innerHTML]="editRowButtonContent"
       (click)="onEdit($event)"></a>
    <a href="#" *ngIf="isActionDelete"
       class="ng2-smart-action ng2-smart-action-delete-delete {{ deleteRowClassFunction(row) }}"
       [innerHTML]="deleteRowButtonContent"
       (click)="onDelete($event)"></a>
    <ng2-st-tbody-custom
      [grid]="grid"
      (custom)="custom.emit($event)"
      [row]="row"
      [source]="source">
    </ng2-st-tbody-custom>
  `,
})
export class TbodyEditDeleteComponent implements OnChanges {

  @Input() grid: Grid;
  @Input() row: Row;
  @Input() source: DataSource;
  @Input() deleteConfirm: EventEmitter<any>;
  @Input() editConfirm: EventEmitter<any>;

  @Output() edit = new EventEmitter<any>();
  @Output() delete = new EventEmitter<any>();
  @Output() custom = new EventEmitter<any>();
  @Output() editRowSelect = new EventEmitter<any>();

  isActionEdit: boolean;
  isActionDelete: boolean;
  editRowButtonContent: any;
  deleteRowButtonContent: any;
  deleteRowClassFunction: Function;
  editRowClassFunction: Function;

  onEdit(event: any) {
    event.preventDefault();
    event.stopPropagation();

    this.editRowSelect.emit(this.row);

    if (this.grid.getSetting('mode') === 'external') {
      this.edit.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.edit(this.row);
    }
  }

  onDelete(event: any) {
    event.preventDefault();
    event.stopPropagation();

    if (this.grid.getSetting('mode') === 'external') {
      this.delete.emit({
        data: this.row.getData(),
        source: this.source,
      });
    } else {
      this.grid.delete(this.row, this.deleteConfirm);
    }
  }

  ngOnChanges() {
    this.isActionEdit = this.grid.getSetting('actions.edit');
    this.isActionDelete = this.grid.getSetting('actions.delete');
    this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
    this.editRowClassFunction = this.grid.getSetting('edit.editClassFunction');
    this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
    this.deleteRowClassFunction = this.grid.getSetting('delete.deleteClassFunction');
  }
}
