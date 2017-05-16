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
//hack
var browsers = require('../NativeOperations/detectBrowsers');
var EquipmentModalComponent = (function () {
    function EquipmentModalComponent(rackService, zone) {
        this.rackService = rackService;
        this.zone = zone;
    }
    EquipmentModalComponent.prototype.detect = function (service, z) {
        detectBrowsers().done(function (result) {
            z.run(function () {
                service.updateBrowsers(result);
            });
        });
    };
    EquipmentModalComponent.prototype.onEvent = function (e) {
        e.stopPropagation();
    };
    return EquipmentModalComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], EquipmentModalComponent.prototype, "show", void 0);
EquipmentModalComponent = __decorate([
    core_1.Component({
        selector: "e-modal",
        template: "\n        \n        <div (click)=\"onEvent($event)\" *ngIf=\"show\">\n            <div class=\"mymodal\">\n                <div class=\"configureForm\">\n                    <form>\n                        DisplayName <input type=\"text\" name=\"dname\"><br>\n                        FQDN <input type=\"text\" name=\"FQDN\"><br>\n                        Management IP Address <input type=\"text\" name=\"ipaddress\"><br>\n\n                        <h3>Remote Management</h3>\n                        <input type=\"radio\" name=\"remote\" value=\"1\" checked>Option 2<br>\n                        <input type=\"radio\" name=\"remote\" value=\"2\">Option 3<br>\n                        <input type=\"radio\" name=\"remote\" value=\"3\">Option 4<br>\n                        <button class=\"btn btn-primary\">Rediscover</button>\n\n                        <h3>Web UI Management</h3>\n                        <div *ngFor=\"let b of rackService.browsers\">\n                            <div *ngIf=\"b.installed\">\n                                <input type=\"checkbox\" name=\"remote\" value=\"1\">Detected\n                                <img class=\"browser-img\" [alt]=\"b.name\" [src]=\"b.img\"/><br>\n                            </div>\n                            <div *ngIf=\"!b.installed\">\n                                <input type=\"checkbox\" name=\"remote\" value=\"1\" disabled>Not Detected\n                                <img class=\"browser-img img-deactivated\" [alt]=\"b.name\" [src]=\"b.img\"/><br>\n                            </div>\n                        </div>\n                        <button class=\"btn btn-primary\" (click)=\"detect(this.rackService, this.zone)\">Rediscover</button><br>\n\n                        WebUrl <input type=\"text\" name=\"url\"><br>\n                        \n                        <input type=\"submit\" value=\"Cancel\">\n                        <input type=\"submit\" value=\"Submit\">\n                        \n                    </form>\n                </div>\n            </div>\n        </div>\n        ",
        styles: ["\n\n       .configureForm {\n            position:fixed;\n            top: 50%;\n            left: 50%;\n            margin-top: -300px; /*set to a negative number 1/2 of your height*/\n            margin-left: -200px; /*set to a negative number 1/2 of your width*/\n            background-color: #cccccc;\n            border: 3px solid #73AD21;\n        }\n        .browser-img{\n            height:30px;\n        }\n        .img-deactivated{\n                filter: gray; /* IE6-9 */\n                filter: grayscale(1); /* Microsoft Edge and Firefox 35+ */\n                -webkit-filter: grayscale(1); /* Google Chrome, Safari 6+ & Opera 15+ */\n        }\n        .mymodal {\n            position: fixed; /* Stay in place */\n            z-index: 1; /* Sit on top */\n            left: 0;\n            top: 0;\n            width: 100%; /* Full width */\n            height: 100%; /* Full height */\n            overflow: auto; /* Enable scroll if needed */\n            background-color: rgb(0,0,0); /* Fallback color */\n            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n        }\n    "]
    }),
    __metadata("design:paramtypes", [rack_service_1.RackService, core_1.NgZone])
], EquipmentModalComponent);
exports.EquipmentModalComponent = EquipmentModalComponent;
//# sourceMappingURL=equipmentModal.component.js.map