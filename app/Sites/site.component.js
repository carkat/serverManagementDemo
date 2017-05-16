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
var rack_service_1 = require("../Racks/rack.service");
var SiteComponent = (function () {
    function SiteComponent(rackService) {
        this.rackService = rackService;
        this.showModal = false;
        this.typeToAdd = 'room';
        this.selectedRoom = 0;
        this.selectedEnclave = 0;
    }
    ;
    SiteComponent.prototype.changeSelectedRoom = function (index) {
        this.selectedRoom = index;
        if (this.rackService.siteList[this.rackService.currentSite.site]
            .buildings[this.rackService.currentSite.building]
            .datacenters[this.rackService.currentSite.datacenter].rooms[this.selectedRoom].enclaves.length === 0) {
            this.selectedEnclave = 0;
        }
        else {
            this.selectedEnclave = this.rackService.siteList[this.rackService.currentSite.site]
                .buildings[this.rackService.currentSite.building]
                .datacenters[this.rackService.currentSite.datacenter].rooms[this.selectedRoom].enclaves.length - 1;
        }
    };
    SiteComponent.prototype.changeSelectedEnclave = function (index) {
        this.selectedEnclave = index;
    };
    SiteComponent.prototype._pushNewItemToService = function (e) {
        this.showModal = !this.showModal;
        if (!(e.inputValue === 'cancel')) {
            if (e.added === 'room') {
                this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms.push({
                    name: e.inputValue,
                    enclaves: []
                });
                this.selectedRoom = this.rackService.siteList[this.rackService.currentSite.site]
                    .buildings[this.rackService.currentSite.building]
                    .datacenters[this.rackService.currentSite.datacenter]
                    .rooms.length - 1;
            }
            else {
                this.rackService.siteList[this.rackService.currentSite.site]
                    .buildings[this.rackService.currentSite.building]
                    .datacenters[this.rackService.currentSite.datacenter]
                    .rooms[this.selectedRoom].enclaves.push({
                    name: e.inputValue,
                    racks: []
                });
                this.selectedEnclave = this.rackService.siteList[this.rackService.currentSite.site]
                    .buildings[this.rackService.currentSite.building]
                    .datacenters[this.rackService.currentSite.datacenter]
                    .rooms[this.selectedRoom].enclaves.length - 1;
            }
            console.log(this.rackService.siteList);
        }
    };
    SiteComponent.prototype.addNew = function (addThis) {
        this.typeToAdd = addThis;
        this.showModal = true;
    };
    return SiteComponent;
}());
SiteComponent = __decorate([
    core_1.Component({
        selector: 'single-site',
        template: "\n        <add-new \n            [showModal]=showModal\n            [whatToAdd]=typeToAdd\n            (newValue)=\"_pushNewItemToService($event)\"\n        ></add-new>\n        <div *ngIf=\"rackService.thereIsADatacenter\">\n           <div *ngIf=\"this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms.length === 0\">\n                <nav class=\"navbar navbar-default\">\n                    You currently have no rooms. Please add one to continue. \n                    <div (click)=\"addNew('room')\" class=\"btn btn-primary\">Add Room</div>\n                </nav>\n           </div>\n                \n            <div *ngIf=\"this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms.length > 0\">\n                <nav class=\"navbar navbar-default\">\n                    <div class=\"navbar-header\">\n                        <a class=\"navbar-brand\">Now viewing rooms for \n                            Site: {{this.rackService.siteList[this.rackService.currentSite.site].name}} \n                            Building: {{this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].name}} \n                            Datacenter: {{this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].name}}</a>\n                    </div>\n                    <div (click)=\"addNew('room')\" class=\"btn btn-primary\">Add Room</div>\n                    <ul class=\"nav navbar-nav\"\n                        *ngFor=\"let room of rackService.siteList[rackService.currentSite.site].buildings[rackService.currentSite.building].datacenters[rackService.currentSite.datacenter].rooms; let i = index\">\n                        <li (click)=\"changeSelectedRoom(i)\" [ngClass]=\"{'active': selectedRoom === i}\"><a>{{room.name}}</a></li>\n                    </ul> \n                </nav>\n\n\n\n                <div *ngIf=\"this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms[selectedRoom].enclaves.length === 0\">\n                    <nav class=\"navbar navbar-default\">\n                        This room has no enclaves. Please add one to continue. \n                        <div (click)=\"addNew('enclave')\" class=\"btn btn-primary\">Add Enclave</div>\n                    </nav>\n                </div>\n                <!--enclaves-->\n                <div *ngIf=\"this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms[selectedRoom].enclaves.length > 0\">\n                    <nav class=\"navbar navbar-default\">\n                        <div class=\"navbar-header\">\n                            <a class=\"navbar-brand\">Enclaves</a>\n                        </div>\n                        <div (click)=\"addNew('enclave')\" class=\"btn btn-primary\">Add Enclave</div>\n                        <ul class=\"nav navbar-nav\"\n                            *ngFor=\"let enclave of rackService.siteList[rackService.currentSite.site].buildings[rackService.currentSite.building].datacenters[rackService.currentSite.datacenter].rooms[selectedRoom].enclaves; let i = index\">\n                            <li (click)=\"changeSelectedEnclave(i)\" [ngClass]=\"{'active': selectedEnclave === i}\"><a>{{enclave.name}}</a></li>\n                        </ul> \n                    </nav>\n                </div>\n                <div *ngIf=\"this.rackService.siteList[this.rackService.currentSite.site].buildings[this.rackService.currentSite.building].datacenters[this.rackService.currentSite.datacenter].rooms[selectedRoom].enclaves.length > 0\">\n                    <all-racks\n                        [room]=selectedRoom\n                        [enclave]=selectedEnclave\n                    ></all-racks>\n                </div>        \n            </div>\n                \n        </div>\n    "
    }),
    __metadata("design:paramtypes", [rack_service_1.RackService])
], SiteComponent);
exports.SiteComponent = SiteComponent;
//# sourceMappingURL=site.component.js.map