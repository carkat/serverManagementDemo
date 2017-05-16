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
var rack_component_1 = require("./rack.component");
var SlotComponent = (function () {
    function SlotComponent(rackComponent, zone) {
        this.rackComponent = rackComponent;
        this.zone = zone;
        //event to trigger rack to update
        this.updateRack = new core_1.EventEmitter();
        this.showConfig = false;
    }
    //set default height of slot
    //ngOnInit(){this.height = 19.55;}
    //emits event from drop
    SlotComponent.prototype._updateRack = function (e) {
        var _this = this;
        if (this.equipmentActive) {
            //will delete old are you sure?
            //get user input
            this.showConfig = false;
        }
        //this fixes an issue when ng2dnd runs outside of angular2's zone
        this.zone.run(function () {
            _this.updateRack.emit({
                id: _this.slotid,
                eventObject: e,
                activeStatus: true
            });
        });
    };
    SlotComponent.prototype.toggleConfig = function () {
        if (this.equipmentActive) {
            this.showConfig = !this.showConfig;
        }
    };
    return SlotComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SlotComponent.prototype, "slotid", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SlotComponent.prototype, "equipmentObject", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], SlotComponent.prototype, "equipmentActive", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SlotComponent.prototype, "updateRack", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], SlotComponent.prototype, "height", void 0);
SlotComponent = __decorate([
    core_1.Component({
        selector: 'slot',
        template: "\n            <div class=\"slot\" \n                dnd-droppable\n                (onDropSuccess)=\"_updateRack($event)\"\n                [style.height.px]=\"height\">\n                <single-equipment \n                    (click)=\"toggleConfig()\"\n                    [width]=\"equipmentObject.w\"\n                    [height]=\"equipmentObject.e.height * 19.55\"\n                    [equipment]=\"equipmentObject.e\"\n                    [isActive]=\"equipmentActive\"\n                    [showConfig]=\"showConfig\"\n                >\n                </single-equipment>\n\n            </div>\n            ",
        styles: [
            " \n        .slot {\n            margin-left: 34.3px;\n            background-color: blue;\n            width: 200px;\n        }\n     "
        ]
    }),
    __metadata("design:paramtypes", [rack_component_1.RackComponent, core_1.NgZone])
], SlotComponent);
exports.SlotComponent = SlotComponent;
//# sourceMappingURL=slot.component.js.map