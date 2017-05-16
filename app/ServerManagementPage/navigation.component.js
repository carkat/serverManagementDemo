"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavigationComponent = (function () {
    function NavigationComponent() {
        this.rackWidth = 40;
    }
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    core_1.Component({
        selector: 'navigation',
        template: "\n        <div class=\"nav-bar\">\n            <site-nav></site-nav>\n            <all-equipment [width]=\"rackWidth\"></all-equipment>\n        </div>\n    ",
        styles: ["\n        .nav-bar {\n            position:fixed;\n            top:0;\n            right:0;\n            height: 100vh;\n            width: 400px;\n            background-color: blue;\n        }\n    "]
    })
], NavigationComponent);
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map