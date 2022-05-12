import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent, NbLoginComponent } from '@nebular/auth';
import { JwtGuard } from './auth/jwt.guard';
import { AddLossCommunicationComponent } from './loss-communication/add-loss-communication/add-loss-communication.component';
import { ListAllLossCommunicationComponent } from './loss-communication/list-all-loss-communication/list-all-loss-communication.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LogoutComponent } from './shared/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: NbLoginComponent,
      },
      {
        path: 'login',
        component: NbLoginComponent,
      },
      {
        path: 'logout',
        component: LogoutComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: ListAllLossCommunicationComponent,
      },
      {
        path: 'add-loss-communication',
        component: AddLossCommunicationComponent,
      },
    ],
  },
  {
    path: '*',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
