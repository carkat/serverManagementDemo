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
var site_component_1 = require("../Sites/site.component");
var SiteNavigationComponent = (function () {
    function SiteNavigationComponent(rackService, siteComponent) {
        this.rackService = rackService;
        this.siteComponent = siteComponent;
        this.showModal = false;
        this.typeToAdd = '';
        this.argsToAdd = [];
    }
    SiteNavigationComponent.prototype.toggleShowBuildings = function (index) {
        this.rackService.siteList[index].showBuildings = !this.rackService.siteList[index].showBuildings;
    };
    SiteNavigationComponent.prototype.toggleShowDatacenters = function (index, buildingIndex, b) {
        this.rackService.siteList[index].buildings[buildingIndex].showDatacenters = !this.rackService.siteList[index].buildings[buildingIndex].showDatacenters;
        console.log(b.showDatacenters);
    };
    SiteNavigationComponent.prototype.showDataCenterView = function (s, b, dc) {
        //call service with the desired datacenter
        this.rackService.currentSite = {
            site: s,
            building: b,
            datacenter: dc
        };
        this.rackService.thereIsADatacenter = true;
        console.log(this.rackService.siteList);
    };
    SiteNavigationComponent.prototype.addNew = function (type, args) {
        this.showModal = !this.showModal;
        this.typeToAdd = type;
        this.argsToAdd = args;
    };
    SiteNavigationComponent.prototype.pushNewItemToService = function (e) {
        this.showModal = !this.showModal;
        if (!(e.inputValue === 'cancel')) {
            if (this.argsToAdd.length === 0) {
                this.rackService.addSite(e.inputValue);
            }
            else if (this.argsToAdd.length === 1) {
                this.rackService.addBldg(e.inputValue, this.argsToAdd);
            }
            else if (this.argsToAdd.length === 2) {
                this.rackService.addDatacenter(e.inputValue, this.argsToAdd);
            }
        }
    };
    return SiteNavigationComponent;
}());
SiteNavigationComponent = __decorate([
    core_1.Component({
        selector: 'site-nav',
        template: "\n        <div site-nav-div>\n        <add-new \n            [showModal]=showModal\n            [whatToAdd]=typeToAdd\n            (newValue)=\"pushNewItemToService($event)\"\n        ></add-new>\n        <div class=\"site-nav-pane\">\n            <div>\n                <h4 class=\"nav-title\">Site Navigation\n                    <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Add new site.\">\n                        <span (click)=\"addNew('site', [])\"\n                        class=\"glyphicon glyphicon-plus\"></span></a>\n                    </p>\n                </h4>\n                \n            </div>\n            <div *ngIf=\"rackService.siteList.length === 0\">\n                You have no sites saved. Please add a site to begin. \n            </div>\n            <div *ngFor=\"let site of rackService.siteList; let i = index\">\n                <div class=\"site accordion-list\">\n                    <div class=\"data side-by-side\">{{site.name}}</div>\n                    <div class=\"show-buttons side-by-side\">\n                        <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Add new building to site\">\n                            <span (click)=\"addNew('building', [i])\"\n                                class=\"glyphicon glyphicon-plus\">\n                            </span></a>\n                        </p>\n                        <div *ngIf=\"!site.showBuildings\" class=\"side-by-side\">\n                            <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Show buildings for this site.\">\n                                <span (click)=\"toggleShowBuildings(i)\" class=\"glyphicon glyphicon-chevron-down\"></span></a>\n                            </p>\n                        </div>\n                        <div *ngIf=\"site.showBuildings\" class=\"side-by-side\">\n                            <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Hide buildings for this site.\">\n                                <span (click)=\"toggleShowBuildings(i)\" class=\"glyphicon glyphicon-chevron-right\"></span></a>\n                            </p>\n                        </div>\n                    </div>        \n                </div>\n                <div *ngIf=\"site.showBuildings\">\n                    <div *ngFor=\"let b of site.buildings; let bi = index\">\n                        <div class=\"building accordion-list\">\n                            <div class=\"data side-by-side\">{{b.name}}</div>\n                            <div class=\"show-buttons side-by-side\">\n                                <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Add new datacenter to this building.\">\n                                    <span \n                                        (click)=\"addNew('datacenter', [i, bi])\"\n                                    class=\"glyphicon glyphicon-plus\"></span></a>\n                                </p>\n                                <div *ngIf=\"!b.showDatacenters\" class=\"side-by-side\">\n                                    <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Show datacenters for this building.\">\n                                        <span (click)=\"toggleShowDatacenters(i, bi, b)\" class=\"glyphicon glyphicon-chevron-down\"></span></a>\n                                    </p>\n                                </div>\n                                <div *ngIf=\"b.showDatacenters\" class=\"side-by-side\">\n                                    <p class=\"side-by-side\"><a href=\"#\" data-tooltip=\"Hide datacenters for this building.\">\n                                        <span (click)=\"toggleShowDatacenters(i, bi, b)\" class=\"glyphicon glyphicon-chevron-right\"></span></a>\n                                    </p>\n                                </div>\n                            </div>\n                        </div>\n                        <div *ngIf=\"b.showDatacenters\">\n                            <div class=\"datacenter accordion-list\" *ngFor=\"let dc of b.datacenters; let dci = index\">\n                                <div class=\"data side-by-side\">{{dc.name}}</div>\n                                <div class=\"show-button side-by-side\" (click)=\"showDataCenterView(i, bi, dci)\">ChangeView</div>\n                                \n                            </div>\n                        \n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n        </div>\n    ",
        styles: [
            "\n        .site-nav-div{\n            position: fixed;\n            top: 0;\n        }\n        .nav-title {\n            color: #ffffff;\n        }\n        .data {\n            width: 200px;\n        }\n        .side-by-side {\n            display: inline-block;\n            float: left;\n        }\n        .site {\n        }\n        .site-nav-pane {\n            height: 400px;\n            border-radius: 4px;\n            overflow:auto;\n        }\n        .accordion-list:hover {\n            background-color: #ddd;\n        }\n        .accordion-list {\n\n             background-color: #eee;\n            color: #444;\n            cursor: pointer;\n            padding: 18px;\n            width: 100%;\n            border: none;\n            outline: none;\n            font-size: 15px;\n            transition: 0.4s;\n            height: 40px;\n            width:100%;\n            margin-bottom:10px;\n        }\n        .building {\n            margin-left:10px;\n        }\n        .datacenter{\n            margin-left: 20px;\n        }\n        [data-tooltip] {\n  position: relative;\n  z-index: 2;\n  cursor: pointer;\n}\n\n[data-tooltip]:before,\n[data-tooltip]:after {\n  visibility: hidden;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)\";\n  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=0);\n  opacity: 0;\n  pointer-events: none;\n}\n\n[data-tooltip]:before {\n  position: absolute;\n  bottom: 150%;\n  left: 50%;\n  margin-bottom: 5px;\n  margin-left: -80px;\n  padding: 7px;\n  width: 160px;\n  -webkit-border-radius: 3px;\n  -moz-border-radius: 3px;\n  border-radius: 3px;\n  background-color: #000;\n  background-color: hsla(0, 0%, 20%, 0.9);\n  color: #fff;\n  content: attr(data-tooltip);\n  text-align: center;\n  font-size: 14px;\n  line-height: 1.2;\n}\n\n[data-tooltip]:after {\n  position: absolute;\n  bottom: 150%;\n  left: 50%;\n  margin-left: -5px;\n  width: 0;\n  border-top: 5px solid #000;\n  border-top: 5px solid hsla(0, 0%, 20%, 0.9);\n  border-right: 5px solid transparent;\n  border-left: 5px solid transparent;\n  content: \" \";\n  font-size: 0;\n  line-height: 0;\n}\n\n[data-tooltip]:hover:before,\n[data-tooltip]:hover:after {\n  visibility: visible;\n  -ms-filter: \"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)\";\n  filter: progid: DXImageTransform.Microsoft.Alpha(Opacity=100);\n  opacity: 1;\n}\n    "
        ]
    }),
    __metadata("design:paramtypes", [rack_service_1.RackService, site_component_1.SiteComponent])
], SiteNavigationComponent);
exports.SiteNavigationComponent = SiteNavigationComponent;
//# sourceMappingURL=siteNavigation.component.js.map