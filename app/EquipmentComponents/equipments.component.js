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
var equipment_services_1 = require("./equipment.services");
var EquipmentsComponent = (function () {
    function EquipmentsComponent(equipmentService) {
        this.equipmentService = equipmentService;
        this.equipmentJson = new Array();
        this.equipmentIsActive = false;
        this.generateDefaultEquipment();
    }
    EquipmentsComponent.prototype.generateDefaultEquipment = function () {
        var _this = this;
        this.equipmentService.getDefaultEquipment().subscribe(function (defaultEquipment) {
            _this.formatData(defaultEquipment);
        });
    };
    EquipmentsComponent.prototype.formatData = function (defaultEquipment) {
        for (var size in defaultEquipment) {
            for (var e in defaultEquipment[size]) {
                this.equipmentJson.push(defaultEquipment[size][e]);
            }
        }
    };
    return EquipmentsComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], EquipmentsComponent.prototype, "width", void 0);
EquipmentsComponent = __decorate([
    core_1.Component({
        selector: 'all-equipment',
        template: "\n            <ul class=\"equipment-list\">\n                <li *ngFor=\"let e of equipmentJson\" >\n                    <single-equipment \n                    [width]=\"width\" \n                    [height]=\"e.height * 19.55\"\n                    [equipment]=\"e\"\n                    [isActive]=\"equipmentIsActive\">\n                    </single-equipment>\n                </li>\n            <ul>\n    ",
        styles: ["\n    .equipment-list{\n        overflow:auto;\n        list-style-type: none;\n        display: list-item;\n        border: 3px solid #73AD21;\n        height: 400px;\n    }"],
        providers: [equipment_services_1.EquipmentService]
    }),
    __metadata("design:paramtypes", [equipment_services_1.EquipmentService])
], EquipmentsComponent);
exports.EquipmentsComponent = EquipmentsComponent;
// position: fixed;
//     overflow:auto;
//     display: list-item;
//     top: 0;
//     right: 0;
//     width: 300px;
//     border: 3px solid #73AD21; 
//# sourceMappingURL=equipments.component.js.map