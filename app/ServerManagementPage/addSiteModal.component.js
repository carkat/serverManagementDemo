"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AddNewSiteModalComponent = (function () {
    function AddNewSiteModalComponent() {
        this.inputValue = '';
        this.showError = false;
        this.newValue = new core_1.EventEmitter();
    }
    AddNewSiteModalComponent.prototype._newValue = function () {
        if (this.inputValue.length === 0) {
            this.showError = true;
        }
        else {
            this.newValue.emit({ added: this.whatToAdd, inputValue: this.inputValue });
            this.inputValue = '';
        }
    };
    AddNewSiteModalComponent.prototype._cancel = function () {
        this.newValue.emit({ added: this.whatToAdd, inputValue: 'cancel' });
        this.inputValue = '';
    };
    return AddNewSiteModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], AddNewSiteModalComponent.prototype, "showModal", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], AddNewSiteModalComponent.prototype, "whatToAdd", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddNewSiteModalComponent.prototype, "newValue", void 0);
AddNewSiteModalComponent = __decorate([
    core_1.Component({
        selector: 'add-new',
        template: "\n        <div *ngIf=\"showModal\" class=\"addmodal\"> \n            <div class=\"add-form\">\n                Add new {{whatToAdd}} <input type=\"text\" name=\"dname\" [(ngModel)]=\"inputValue\"><br>\n                <div (click)=\"_newValue()\" class=\"btn btn-primary\">Submit</div>\n                <div (click)=\"_cancel()\" class=\"btn btn-danger\">Cancel</div>\n            </div>\n        </div>\n    ",
        styles: ["\n       .add-form {\n            position:fixed;\n            top: 50%;\n            left: 50%;\n            margin-top: -300px; /*set to a negative number 1/2 of your height*/\n            margin-left: -200px; /*set to a negative number 1/2 of your width*/\n            background-color: #cccccc;\n            border: 3px solid #73AD21;\n        }\n        .addmodal {\n            position: fixed; /* Stay in place */\n            z-index: 1; /* Sit on top */\n            left: 0;\n            top: 0;\n            width: 100%; /* Full width */\n            height: 100%; /* Full height */\n            overflow: auto; /* Enable scroll if needed */\n            background-color: rgb(0,0,0); /* Fallback color */\n            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n        }\n    "]
    })
], AddNewSiteModalComponent);
exports.AddNewSiteModalComponent = AddNewSiteModalComponent;
//# sourceMappingURL=addSiteModal.component.js.map