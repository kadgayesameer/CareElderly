import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BegarsHelpComponent } from './welcome/begars-cards/begars-help/begars-help.component';
import { HealthTrackerComponent } from './welcome/health-cards/health-tracker/health-tracker.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgoInfoComponent } from './welcome/ngo-info/ngo-info.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { HeaderComponent } from './header/header.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';


const routes: Routes = [
  { path: '', component: LoginComponent },
  // { path: 'welcome/:name', component: HeaderComponent },
  { path: 'home', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path: 'signUp', component: SignUpComponent },
  { path: 'begarHelp', component: BegarsHelpComponent, canActivate: [RouteGuardService] },
  { path: 'healthTracker', component: HealthTrackerComponent, canActivate: [RouteGuardService] },
  { path: 'contactUs', component: ContactUsComponent },
  { path: 'ngoInfo', component: NgoInfoComponent, canActivate: [RouteGuardService] },
  { path: '**', component: ErrorComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
