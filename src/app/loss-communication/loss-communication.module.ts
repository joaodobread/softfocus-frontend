import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbSelectModule,
  NbSpinnerModule,
  NbUserModule,
} from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';

import { ComponentsModule } from '../components/components.module';
import { AddLossCommunicationComponent } from './add-loss-communication/add-loss-communication.component';
import { ListAllLossCommunicationComponent } from './list-all-loss-communication/list-all-loss-communication.component';
import { LossCommunicationDetailsComponent } from './loss-communication-details/loss-communication-details.component';
import { LossCommunicationEditComponent } from './loss-communication-edit/loss-communication-edit.component';

@NgModule({
  declarations: [
    ListAllLossCommunicationComponent,
    LossCommunicationDetailsComponent,
    AddLossCommunicationComponent,
    LossCommunicationEditComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NbInputModule,
    ComponentsModule,
    NbSpinnerModule,
    NbDatepickerModule.forRoot(),
    NgxMaskModule.forChild(),
    NbSelectModule,
    FormsModule,
    NbCardModule,
    NbListModule,
    NbUserModule,
    NbButtonModule,
    NbIconModule,
  ],
})
export class LossCommunicationModule {}
