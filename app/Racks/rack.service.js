"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Import RxJs required methods
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var RackService = (function () {
    function RackService() {
        this.thereIsADatacenter = false;
        this.currentSite = {
            site: -1,
            building: -1,
            datacenter: -1
        };
        this.siteList = [];
        this.rackList = [];
        this.browsers = [
            {
                installed: false,
                name: 'Firefox',
                img: './app/EquipmentComponents/img/firefox-active.png'
            },
            {
                installed: false,
                name: 'Chrome',
                img: './app/EquipmentComponents/img/chrome-active.png'
            },
            {
                installed: false,
                name: 'IE',
                img: './app/EquipmentComponents/img/ie-active.png'
            }
        ];
    }
    RackService.prototype.updateBrowsers = function (result) {
        this.browsers = [];
        for (var i = 0; i < result.length; i++) {
            if (result[i].toLowerCase().includes('firefox')) {
                this.browsers.push({
                    installed: true,
                    name: 'Firefox',
                    img: './app/EquipmentComponents/img/firefox-active.png'
                });
            }
            else if (result[i].toLowerCase().includes('chrome')) {
                this.browsers.push({
                    installed: true,
                    name: 'Chrome',
                    img: './app/EquipmentComponents/img/chrome-active.png'
                });
            }
            else if (result[i].toLowerCase().includes('iexplore')) {
                this.browsers.push({
                    installed: true,
                    name: 'IE',
                    img: './app/EquipmentComponents/img/ie-active.png'
                });
            }
        }
        console.log(this.browsers);
    };
    RackService.prototype.generateEmptyRack = function (room, enclave, rackID) {
        var slotArray = [];
        var rackSize = 42;
        var rackWidth = 190;
        var shouldHideSlot = false;
        var emptySlot = {
            'e': {
                'name': 'Empty',
                'imgUrl': './app/Racks/img/1274237_300x300.jpg',
                'height': 1
            },
            'w': 190
        };
        var rackCount = 1;
        for (var i = 0; i < rackSize; i++) {
            slotArray.push({
                'equipmentActive': false,
                'slotid': i,
                'shouldHideSlot': shouldHideSlot,
                'object': emptySlot,
            });
        }
        console.log(this.currentSite);
        this.siteList[this.currentSite.site]
            .buildings[this.currentSite.building]
            .datacenters[this.currentSite.datacenter]
            .rooms[room]
            .enclaves[enclave].racks[rackID] = slotArray;
        console.log('success');
    };
    RackService.prototype.updateRack = function (room, enclave, rackId, slotId, newSlotValue, activeStatus) {
        var success = false;
        if (newSlotValue.e.height > 1) {
            success = this.checkSlotsForValid(room, enclave, rackId, slotId, newSlotValue.e.height);
        }
        else if (newSlotValue.e.height === 1) {
            success = true;
        }
        if (success) {
            this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][slotId].equipmentActive = activeStatus;
            this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][slotId].object = {
                e: newSlotValue.e,
                w: newSlotValue.w
            };
            // this.slotList[slotId].equipmentActive = activeStatus
            // this.slotList[slotId].object = {
            //     e : newSlotValue.e,
            //     w : newSlotValue.w
            // };
            this.consumeSlots(room, enclave, rackId, slotId, newSlotValue.e.height);
        }
        return success;
    };
    RackService.prototype.checkSlotsForValid = function (room, enclave, rackId, startIndex, numberOfSlotsToConsume) {
        var indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;
        while (numberOfSlotsToConsume > 0) {
            //this.slotList[indexToConsume]
            if (this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][indexToConsume].equipmentActive) {
                //notify user
                return false;
            }
            indexToConsume++;
            numberOfSlotsToConsume--;
        }
        return true;
    };
    RackService.prototype.consumeSlots = function (room, enclave, rackId, startIndex, numberOfSlotsToConsume) {
        //don't consume the current slot
        var indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;
        while (numberOfSlotsToConsume > 0) {
            console.log('something');
            this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][indexToConsume].shouldHideSlot = true;
            indexToConsume++;
            numberOfSlotsToConsume--;
        }
    };
    RackService.prototype.getSavedRack = function (args) {
        return new Array;
    };
    RackService.prototype.addSite = function (value) {
        this.siteList.push({
            name: value,
            showBuildings: false,
            buildings: []
        });
    };
    RackService.prototype.addBldg = function (value, argsToAdd) {
        this.siteList[argsToAdd[0]].buildings.push({
            name: value,
            showDatacenters: false,
            datacenters: []
        });
    };
    RackService.prototype.addDatacenter = function (value, argsToAdd) {
        this.siteList[argsToAdd[0]].buildings[argsToAdd[1]].datacenters.push({
            name: value,
            rooms: []
        });
        console.log(this.siteList[argsToAdd[0]].buildings[argsToAdd[1]].datacenters);
    };
    return RackService;
}());
RackService = __decorate([
    core_1.Injectable()
], RackService);
exports.RackService = RackService;
//# sourceMappingURL=rack.service.js.map