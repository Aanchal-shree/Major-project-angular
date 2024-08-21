import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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
import { AluminiComponent } from './alumini/alumini.component';
import { AdmissionComponent } from './admission/admission.component';
import { MoreComponent } from './more/more.component';
import { AprovalsComponent } from './aprovals/aprovals.component';
import { StudentDeskComponent } from './student-desk/student-desk.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  // Add other routes here
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Default route
];

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
    FterComponent,
    AluminiComponent,
    AdmissionComponent,
    MoreComponent,
    AprovalsComponent,
    StudentDeskComponent
  ],
  imports: [
    [RouterModule.forRoot(routes)],
    BrowserModule,
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }