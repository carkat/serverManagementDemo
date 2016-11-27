import { Component, Input } from '@angular/core';
import { EquipmentService } from './equipment.services';
import {DragulaModule} from '../ng2-dragula/ng2-dragula';

@Component({
    selector: 'all-equipment',
    template: `
        <div [dragula]="equipment-bag" [dragulaModel]="equipmentJson"> 
            <div *ngFor="let e of equipmentJson" >
                <single-equipment [width]="width" [equipment]="e">
                </single-equipment>
            </div>
        </div>
    `,
    providers: [EquipmentService]
})
export class EquipmentsComponent{
    @Input() width: number;
    equipmentJson = new Array();

    constructor(private equipmentService: EquipmentService){
        this.generateDefaultEquipment();
    }
    generateDefaultEquipment(){
        this.equipmentService.getDefaultEquipment().subscribe(
            defaultEquipment => {
                this.formatData(defaultEquipment);                
            });
    }
    formatData(defaultEquipment: any){
        for(let size in defaultEquipment){
            for(let e in defaultEquipment[size]){
                this.equipmentJson.push(defaultEquipment[size][e]);
            }
        }
    }
}
