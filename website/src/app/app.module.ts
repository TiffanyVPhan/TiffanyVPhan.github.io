import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LandingComponent } from './component/landing/landing.component';
import { CardComponent } from './component/card/card.component';
import { FooterComponent } from './component/footer/footer.component';
import { AboutComponent } from './component/about/about.component';
import { ResumeComponent } from './component/resume/resume.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: '',
    component: LandingComponent,
    data: {
      highlightPortfolio: true,
    },
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingComponent,
    CardComponent,
    FooterComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
