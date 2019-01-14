import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { Grid } from '../../lib/grid';
import { DataSource } from '../../lib/data-source/data-source';
var Ng2SmartTableTbodyComponent = /** @class */ (function () {
    function Ng2SmartTableTbodyComponent() {
        this.save = new EventEmitter();
        this.cancel = new EventEmitter();
        this.edit = new EventEmitter();
        this.delete = new EventEmitter();
        this.custom = new EventEmitter();
        this.edited = new EventEmitter();
        this.userSelectRow = new EventEmitter();
        this.editRowSelect = new EventEmitter();
        this.multipleSelectRow = new EventEmitter();
        this.rowHover = new EventEmitter();
    }
    Ng2SmartTableTbodyComponent.prototype.ngOnChanges = function () {
        this.isMultiSelectVisible = this.grid.isMultiSelectVisible();
        this.showActionColumnLeft = this.grid.showActionColumn('left');
        this.mode = this.grid.getSetting('mode');
        this.editInputClass = this.grid.getSetting('edit.inputClass');
        this.showActionColumnRight = this.grid.showActionColumn('right');
        this.isActionAdd = this.grid.getSetting('actions.add');
        this.isActionEdit = this.grid.getSetting('actions.edit');
        this.isActionDelete = this.grid.getSetting('actions.delete');
        this.noDataMessage = this.grid.getSetting('noDataMessage');
        this.isContext = this.grid.getSetting('contextMenu.show');
        this.contextItems = this.grid.getSetting('contextMenu.items');
    };
    Ng2SmartTableTbodyComponent.prototype.onContextMenu = function (row) {
        this.currentRow = row;
        this.userSelectRow.emit(row);
    };
    Ng2SmartTableTbodyComponent.decorators = [
        { type: Component, args: [{
                    selector: '[ng2-st-tbody]',
                    styles: [":host .ng2-smart-row.selected{background:rgba(0,0,0,.05)}:host .ng2-smart-row .ng2-smart-actions.ng2-smart-action-multiple-select{text-align:center} /*# sourceMappingURL=tbody.component.css.map */ "],
                    template: "<tr *ngFor=\"let row of grid.getRows()\" (click)=\"userSelectRow.emit(row)\" (mouseover)=\"rowHover.emit(row)\" (contextmenu)=\"onContextMenu(row)\" class=\"ng2-smart-row\" [className]=\"rowClassFunction(row)\" [ngClass]=\"{selected: row.isSelected}\" [contextMenu]=\"basicMenu\"><td *ngIf=\"isMultiSelectVisible\" class=\"ng2-smart-actions ng2-smart-action-multiple-select\" (click)=\"multipleSelectRow.emit(row)\"><input type=\"checkbox\" class=\"form-control\" [ngModel]=\"row.isSelected\"></td><td *ngIf=\"!row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\"><ng2-st-tbody-edit-delete [grid]=\"grid\" [deleteConfirm]=\"deleteConfirm\" [editConfirm]=\"editConfirm\" (edit)=\"edit.emit(row)\" (delete)=\"delete.emit(row)\" (custom)=\"custom.emit($event)\" (editRowSelect)=\"editRowSelect.emit($event)\" [row]=\"row\" [source]=\"source\"></ng2-st-tbody-edit-delete></td><td *ngIf=\"row.isInEditing && showActionColumnLeft\" class=\"ng2-smart-actions\"><ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel></td><td *ngFor=\"let cell of row.cells\"><ng2-smart-table-extended-cell [cell]=\"cell\" [grid]=\"grid\" [row]=\"row\" [isNew]=\"false\" [mode]=\"mode\" [editConfirm]=\"editConfirm\" [inputClass]=\"editInputClass\" [isInEditing]=\"row.isInEditing\"></ng2-smart-table-extended-cell></td><td *ngIf=\"row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\"><ng2-st-tbody-create-cancel [grid]=\"grid\" [row]=\"row\" [editConfirm]=\"editConfirm\"></ng2-st-tbody-create-cancel></td><td *ngIf=\"!row.isInEditing && showActionColumnRight\" class=\"ng2-smart-actions\"><ng2-st-tbody-edit-delete [grid]=\"grid\" [deleteConfirm]=\"deleteConfirm\" [editConfirm]=\"editConfirm\" [row]=\"row\" [source]=\"source\" (edit)=\"edit.emit(row)\" (delete)=\"delete.emit(row)\" (custom)=\"custom.emit($event)\" (editRowSelect)=\"editRowSelect.emit($event)\"></ng2-st-tbody-edit-delete></td></tr><tr *ngIf=\"grid.getRows().length == 0\"><td [attr.colspan]=\"grid.getColumns().length + (isActionAdd || isActionEdit || isActionDelete)\">{{ noDataMessage }}</td></tr><context-menu [disabled]=\"!isContext\"><div *ngFor=\"let item of contextItems; let i = index\"><ng-template contextMenuItem (execute)=\"item.action(currentRow)\"><span *ngIf=\"item.type === 'string' || !item.type\" class=\"{{ item.classes }}\">{{ item.value }}</span><div *ngIf=\"item.type === 'html'\" [innerHTML]=\"item.value\"></div></ng-template><div *ngIf=\"(i + 1) < contextItems.length\"><ng-template contextMenuItem divider=\"true\"></ng-template></div></div></context-menu>",
                },] },
    ];
    /** @nocollapse */
    Ng2SmartTableTbodyComponent.propDecorators = {
        "grid": [{ type: Input },],
        "source": [{ type: Input },],
        "deleteConfirm": [{ type: Input },],
        "editConfirm": [{ type: Input },],
        "rowClassFunction": [{ type: Input },],
        "save": [{ type: Output },],
        "cancel": [{ type: Output },],
        "edit": [{ type: Output },],
        "delete": [{ type: Output },],
        "custom": [{ type: Output },],
        "edited": [{ type: Output },],
        "userSelectRow": [{ type: Output },],
        "editRowSelect": [{ type: Output },],
        "multipleSelectRow": [{ type: Output },],
        "rowHover": [{ type: Output },],
        "basicMenu": [{ type: ViewChild, args: [ContextMenuComponent,] },],
    };
    return Ng2SmartTableTbodyComponent;
}());
export { Ng2SmartTableTbodyComponent };
//# sourceMappingURL=tbody.component.js.map