import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbDialogModule,
  NbToastrModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent } from './shared/layout/layout.component';
import { HttpClientModule } from '@angular/common/http';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { LogoutComponent } from './shared/logout/logout.component';
import { LossCommunicationModule } from './loss-communication/loss-communication.module';
import { ComponentsModule } from './components/components.module';
import { NgxMaskModule } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LayoutComponent, LogoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbCardModule,
    NgxMaskModule.forRoot({ validation: false }),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          baseEndpoint: 'https://softfocus-api.herokuapp.com',
          token: {
            key: 'token',
          },
          login: {
            endpoint: '/auth/sign-in',
            redirect: {
              success: '/dashboard',
            },
          },
          register: {
            endpoint: '/auth/analyst',
          },
        }),
      ],
      forms: {
        login: {
          strategy: 'email',
          rememberMe: false,
          showMessages: {
            success: true,
            error: true,
          },
        },
      },
    }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    LossCommunicationModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    NbDialogModule.forRoot(),
    NbToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
