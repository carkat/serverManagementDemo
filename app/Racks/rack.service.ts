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
    
    generateEmptyRack(rackID: number){
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
        this.rackList[rackID] = slotArray;
        console.log(this.rackList);
    }
    updateRack(rackId: number, slotId: number, newSlotValue: any, activeStatus: boolean){
        let success = false;
        if(newSlotValue.e.height > 1){
            success = this.checkSlotsForValid(rackId, slotId, newSlotValue.e.height)
        } else if (newSlotValue.e.height === 1){
            success = true;
        }

        if(success){
            this.rackList[rackId][slotId].equipmentActive = activeStatus
            this.rackList[rackId][slotId].object = {
                e : newSlotValue.e,
                w : newSlotValue.w
            };
            // this.slotList[slotId].equipmentActive = activeStatus
            // this.slotList[slotId].object = {
            //     e : newSlotValue.e,
            //     w : newSlotValue.w
            // };
            this.consumeSlots(rackId, slotId, newSlotValue.e.height)
        } 
        return success;
       
    }
    checkSlotsForValid(rackId: number, startIndex: number, numberOfSlotsToConsume: number){
        let indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;

        while(numberOfSlotsToConsume > 0){
            //this.slotList[indexToConsume]
            if(this.rackList[rackId][indexToConsume].equipmentActive){
                //notify user
                return false;
            }
            indexToConsume++;
            numberOfSlotsToConsume--;
        }
        return true;

    }
    consumeSlots(rackId: number, startIndex: number, numberOfSlotsToConsume: number){
        //don't consume the current slot
        let indexToConsume = startIndex + 1;
        numberOfSlotsToConsume = numberOfSlotsToConsume - 1;

        while(numberOfSlotsToConsume > 0){
            this.rackList[rackId][indexToConsume].shouldHideSlot = true;
            indexToConsume++;
            numberOfSlotsToConsume--;
        }

    }
    getSavedRack(args: any[]){
        return new Array;
    }
}