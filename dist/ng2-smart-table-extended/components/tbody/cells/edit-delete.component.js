import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Grid } from '../../../lib/grid';
import { Row } from '../../../lib/data-set/row';
import { DataSource } from '../../../lib/data-source/data-source';
var TbodyEditDeleteComponent = /** @class */ (function () {
    function TbodyEditDeleteComponent() {
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.editRowSelect = new EventEmitter();
    }
    TbodyEditDeleteComponent.prototype.onEdit = function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.editRowSelect.emit(this.row);
        if (this.grid.getSetting('mode') === 'external') {
            this.edit.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.edit(this.row);
        }
    };
    TbodyEditDeleteComponent.prototype.onDelete = function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.grid.getSetting('mode') === 'external') {
            this.delete.emit({
                data: this.row.getData(),
                source: this.source,
            });
        }
        else {
            this.grid.delete(this.row, this.deleteConfirm);
        }
    };
    TbodyEditDeleteComponent.prototype.ngOnChanges = function () {
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.editRowButtonContent = this.grid.getSetting('edit.editButtonContent');
        this.editRowClassFunction = this.grid.getSetting('edit.editClassFunction');
        this.deleteRowButtonContent = this.grid.getSetting('delete.deleteButtonContent');
        this.deleteRowClassFunction = this.grid.getSetting('delete.deleteClassFunction');
    };
    TbodyEditDeleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng2-st-tbody-edit-delete',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    template: "\n    <a href=\"#\" *ngIf=\"isActionEdit\"\n       class=\"ng2-smart-action ng2-smart-action-edit-edit {{ editRowClassFunction(row) }}\"\n       [innerHTML]=\"editRowButtonContent\"\n       (click)=\"onEdit($event)\"></a>\n    <a href=\"#\" *ngIf=\"isActionDelete\"\n       class=\"ng2-smart-action ng2-smart-action-delete-delete {{ deleteRowClassFunction(row) }}\"\n       [innerHTML]=\"deleteRowButtonContent\"\n       (click)=\"onDelete($event)\"></a>\n    <ng2-st-tbody-custom\n      [grid]=\"grid\"\n      (custom)=\"custom.emit($event)\"\n      [row]=\"row\"\n      [source]=\"source\">\n    </ng2-st-tbody-custom>\n  ",
                },] },
    ];
    /** @nocollapse */
    TbodyEditDeleteComponent.propDecorators = {
        "grid": [{ type: Input },],
        "row": [{ type: Input },],
        "source": [{ type: Input },],
        "deleteConfirm": [{ type: Input },],
        "editConfirm": [{ type: Input },],
        "edit": [{ type: Output },],
        "delete": [{ type: Output },],
        "custom": [{ type: Output },],
        "editRowSelect": [{ type: Output },],
    };
    return TbodyEditDeleteComponent;
}());
export { TbodyEditDeleteComponent };
//# sourceMappingURL=edit-delete.component.js.map