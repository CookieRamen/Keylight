import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import {HomeComponent} from './home/home.component';
import {NotificationsComponent} from './notifications/notifications.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'settings',
    component: SettingsComponent
  }, {
    path: 'notifications',
    component: NotificationsComponent
  }, {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
