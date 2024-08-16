import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutsbitComponent } from './aboutsbit/aboutsbit.component';
import { CoursesComponent } from './courses/courses.component';
import { ImageslidingComponent } from './imagesliding/imagesliding.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { Marquee1Component } from './marquee1/marquee1.component';
import { Marquee2Component } from './marquee2/marquee2.component';
import { BoxesComponent } from './boxes/boxes.component';
import { LogosComponent } from './logos/logos.component';
import { FterComponent } from './fter/fter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    AboutsbitComponent,
    CoursesComponent,
    ImageslidingComponent,
    FacilitiesComponent,
    Marquee1Component,
    Marquee2Component,
    BoxesComponent,
    LogosComponent,
    FterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
