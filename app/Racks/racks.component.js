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
var rack_service_1 = require("./rack.service");
var RacksComponent = (function () {
    function RacksComponent(rackService) {
        this.rackService = rackService;
    }
    RacksComponent.prototype.addNewRack = function () {
        if (this.rackService.siteList[this.rackService.currentSite.site]
            .buildings[this.rackService.currentSite.building]
            .datacenters[this.rackService.currentSite.datacenter]
            .rooms[this.room]
            .enclaves[this.enclave].racks.length === 0) {
            this.rackService.generateEmptyRack(this.room, this.enclave, 0);
        }
        else {
            this.newRackId = this.rackService.siteList[this.rackService.currentSite.site]
                .buildings[this.rackService.currentSite.building]
                .datacenters[this.rackService.currentSite.datacenter]
                .rooms[this.room]
                .enclaves[this.enclave].racks.length;
            this.rackService.generateEmptyRack(this.room, this.enclave, this.newRackId);
        }
    };
    return RacksComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RacksComponent.prototype, "room", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], RacksComponent.prototype, "enclave", void 0);
RacksComponent = __decorate([
    core_1.Component({
        selector: 'all-racks',
        template: "\n        <button (click)=\"addNewRack()\">Add New Rack</button>\n        <div *ngFor=\"let rack of rackService.siteList[rackService.currentSite.site]\n            .buildings[rackService.currentSite.building]\n            .datacenters[rackService.currentSite.datacenter]\n            .rooms[room]\n            .enclaves[enclave].racks; let i = index\">\n            <div class=\"racks\">\n                <single-rack\n                    [room]=room\n                    [enclave]=enclave\n                    [rackId]=i\n                    ></single-rack>\n            </div>\n        </div>\n    ",
        styles: ["\n        .racks {\n            float:left;\n        }\n    "]
    }),
    __metadata("design:paramtypes", [rack_service_1.RackService])
], RacksComponent);
exports.RacksComponent = RacksComponent;
//# sourceMappingURL=racks.component.js.map