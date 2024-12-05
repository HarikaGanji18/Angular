import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
import { CardDetailsComponent } from './card-details/card-details.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FAQComponent } from './f-aq/f-aq.component';
import { FooterComponent } from './footer/footer.component';
import { SubcardsComponent } from './subcards/subcards.component';
import { SliderComponent } from './slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CardDetailsComponent,
    WelcomepageComponent,
    NavbarComponent,
    BannerComponent,
    FAQComponent,
    FooterComponent,
    SubcardsComponent,
    SliderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
