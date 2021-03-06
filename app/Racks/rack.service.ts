import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'

@Injectable()
export class RackService{ 
    thereIsADatacenter = false;
    currentSite= {
        site: -1,
        building: -1,
        datacenter: -1
    };
    siteList: any[] = [];
    rackList: any[] = [];
    slotList: any[];

    browsers = [
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
    ]

    updateBrowsers(result: any[]){
        this.browsers = [];
        for(let i = 0; i < result.length; i++){
            if(result[i].toLowerCase().includes('firefox')){
                this.browsers.push({
                    installed: true,
                    name: 'Firefox',
                    img: './app/EquipmentComponents/img/firefox-active.png'
                });
            } else if(result[i].toLowerCase().includes('chrome')){
                this.browsers.push({ 
                    installed: true,
                    name: 'Chrome',
                    img: './app/EquipmentComponents/img/chrome-active.png'
                });
            } else if(result[i].toLowerCase().includes('iexplore')){
                this.browsers.push({ 
                    installed: true,
                    name: 'IE',
                    img: './app/EquipmentComponents/img/ie-active.png'
                });
            }
        }
        console.log(this.browsers);
    }
    
    generateEmptyRack(room: number, enclave:number, rackID: number){
        let slotArray: any[] = [];
        let rackSize = 42;
        let rackWidth = 190;
        let shouldHideSlot = false;
        let emptySlot = {
            'e': {
                'name': 'Empty',
                'imgUrl': './app/Racks/img/1274237_300x300.jpg',
                'height': 1
            },
            'w': 190
        }
        let rackCount = 1
        for(let i = 0; i < rackSize; i++){
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
    }
    updateRack(room: number, enclave:number, rackId: number, slotId: number, newSlotValue: any, activeStatus: boolean){
        let success = false;
        if(newSlotValue.e.height > 1){
            success = this.checkSlotsForValid(room, enclave, rackId, slotId, newSlotValue.e.height)
        } else if (newSlotValue.e.height === 1){
            success = true;
        }

        if(success){
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
                    e : newSlotValue.e,
                    w : newSlotValue.w
                };
            // this.slotList[slotId].equipmentActive = activeStatus
            // this.slotList[slotId].object = {
            //     e : newSlotValue.e,
            //     w : newSlotValue.w
            // };
            this.consumeSlots(room, enclave, rackId, slotId, newSlotValue.e.height)
            
        } 
        return success;
       
    }
    checkSlotsForValid(room: number, enclave:number,rackId: number, startIndex: number, numberOfSlotsToConsume: number){
        let indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;

        while(numberOfSlotsToConsume > 0){
            //this.slotList[indexToConsume]
            if(this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][indexToConsume].equipmentActive){
                //notify user
                return false;
            }
            indexToConsume++;
            numberOfSlotsToConsume--;
        }
        return true;

    }
    consumeSlots(room: number, enclave:number, rackId: number, startIndex: number, numberOfSlotsToConsume: number){
        //don't consume the current slot
        
        let indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;

        while(numberOfSlotsToConsume > 0){
            console.log('something');
            this.siteList[this.currentSite.site]
                .buildings[this.currentSite.building]
                .datacenters[this.currentSite.datacenter]
                .rooms[room]
                .enclaves[enclave].racks[rackId][indexToConsume].shouldHideSlot = true;
            indexToConsume++;
            numberOfSlotsToConsume--;
        }

    }
    getSavedRack(args: any[]){
        return new Array;
    }

     addSite(value: string){
        
        this.siteList.push({ 
            name: value,
            showBuildings: false,
            buildings: []
        });
    }
    addBldg(value: string, argsToAdd: any[]){
        this.siteList[argsToAdd[0]].buildings.push({
            name:value,
            showDatacenters: false,
            datacenters: []});
    }
    addDatacenter(value: string, argsToAdd: any[]){
        this.siteList[argsToAdd[0]].buildings[argsToAdd[1]].datacenters.push({
            name: value,
            rooms: []
        })
        console.log(this.siteList[argsToAdd[0]].buildings[argsToAdd[1]].datacenters);
    }
}