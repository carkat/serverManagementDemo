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
var EquipmentComponent = (function () {
    function EquipmentComponent() {
    }
    EquipmentComponent.prototype.ngOnInit = function () {
        this.setValues();
    };
    EquipmentComponent.prototype.ngOnChanges = function (c) {
        this.setValues();
    };
    EquipmentComponent.prototype.setValues = function () {
        this.name = this.equipment.name;
        this.equipmentImg = this.equipment.imgUrl;
        //data transfers on drop
        this.transferData = {
            e: this.equipment,
            w: this.width
        };
    };
    return EquipmentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EquipmentComponent.prototype, "isActive", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], EquipmentComponent.prototype, "equipment", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EquipmentComponent.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EquipmentComponent.prototype, "showConfig", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EquipmentComponent.prototype, "height", void 0);
EquipmentComponent = __decorate([
    core_1.Component({
        selector: 'single-equipment',
        template: "\n        <e-modal [show]=\"showConfig\"></e-modal>\n        <div class=\"equipment\">\n        <img class=\"e-image\" dnd-draggable [dragEnabled]=\"true\"\n            [dragData]=\"transferData\"\n            [alt]=\"name\"\n            [src]=\"equipmentImg\"\n            [style.height.px]=\"height\" />\n        </div>\n     ",
        styles: ["\n        .e-image {\n            display: table;\n            width: 100%\n        }\n        .equipment{\n            display: table;\n            height: 100%;\n        }"]
    })
], EquipmentComponent);
exports.EquipmentComponent = EquipmentComponent;
//# sourceMappingURL=equipment.component.js.map