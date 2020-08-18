import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CarouselComponent } from './welcome/carousel/carousel.component';
import { InfoCardsComponent } from './welcome/info-cards/info-cards.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HealthCardsComponent } from './welcome/health-cards/health-cards.component';
import { BegarsCardsComponent } from './welcome/begars-cards/begars-cards.component';
import { HealthTrackerComponent } from './welcome/health-cards/health-tracker/health-tracker.component';
import { BegarsHelpComponent } from './welcome/begars-cards/begars-help/begars-help.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgoInfoComponent } from './welcome/ngo-info/ngo-info.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    WelcomeComponent,
    InfoCardsComponent,
    LoginComponent,
    SignUpComponent,
    HealthCardsComponent,
    BegarsCardsComponent,
    HealthTrackerComponent,
    BegarsHelpComponent,
    ContactUsComponent,
    NgoInfoComponent,
    ErrorComponentComponent,
    LogoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
