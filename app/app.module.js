"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
//built-in
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var forms_1 = require("@angular/forms");
//public
var ng2_dnd_1 = require("ng2-dnd");
var ng2_popup_1 = require("ng2-popup");
//native
var equipment_component_1 = require("./EquipmentComponents/equipment.component");
var equipmentModal_component_1 = require("./EquipmentComponents/equipmentModal.component");
var equipments_component_1 = require("./EquipmentComponents/equipments.component");
var racks_component_1 = require("./Racks/racks.component");
var rack_component_1 = require("./Racks/rack.component");
var rack_service_1 = require("./Racks/rack.service");
var slot_component_1 = require("./Racks/slot.component");
var ServerManagementPage_component_1 = require("./ServerManagementPage/ServerManagementPage.component");
var addSiteModal_component_1 = require("./ServerManagementPage/addSiteModal.component");
var navigation_component_1 = require("./ServerManagementPage/navigation.component");
var siteNavigation_component_1 = require("./Sites/siteNavigation.component");
var site_component_1 = require("./Sites/site.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng2_dnd_1.DndModule.forRoot(),
            ng2_popup_1.Ng2PopupModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_1.AppComponent,
            equipment_component_1.EquipmentComponent,
            equipmentModal_component_1.EquipmentModalComponent,
            equipments_component_1.EquipmentsComponent,
            slot_component_1.SlotComponent,
            rack_component_1.RackComponent,
            racks_component_1.RacksComponent,
            ServerManagementPage_component_1.ServerManagementComponent,
            navigation_component_1.NavigationComponent,
            siteNavigation_component_1.SiteNavigationComponent,
            site_component_1.SiteComponent,
            addSiteModal_component_1.AddNewSiteModalComponent
        ],
        providers: [rack_service_1.RackService, site_component_1.SiteComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map