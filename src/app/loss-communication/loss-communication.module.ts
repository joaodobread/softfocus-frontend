import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddLossCommunicationComponent } from './add-loss-communication/add-loss-communication.component';
import { ListAllLossCommunicationComponent } from './list-all-loss-communication/list-all-loss-communication.component';



@NgModule({
  declarations: [
    AddLossCommunicationComponent,
    ListAllLossCommunicationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LossCommunicationModule { }
