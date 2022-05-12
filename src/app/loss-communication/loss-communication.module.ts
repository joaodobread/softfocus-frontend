import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbDatepickerModule,
  NbInputModule,
  NbSpinnerModule,
} from '@nebular/theme';
import { ComponentsModule } from '../components/components.module';

import { ListAllLossCommunicationComponent } from './list-all-loss-communication/list-all-loss-communication.component';
import { LossCommunicationDetailsComponent } from './loss-communication-details/loss-communication-details.component';

@NgModule({
  declarations: [
    ListAllLossCommunicationComponent,
    LossCommunicationDetailsComponent,
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
  ],
})
export class LossCommunicationModule {}
