import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CardComponent } from './component/helper/fade-in/card/card.component';
import { NavBarComponent } from './component/views/nav-bar/nav-bar.component';
import { LandingComponent } from './component/views/landing/landing.component';
import { FooterComponent } from './component/views/footer/footer.component';
import { AboutComponent } from './component/views/about/about.component';
import { ResumeComponent } from './component/views/resume/resume.component';
import { FadeInComponent } from './component/helper/fade-in/fade-in.component';
import { ContactComponent } from './component/views/contact/contact.component';

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
    path: 'contact',
    component: ContactComponent
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
    ResumeComponent,
    FadeInComponent,
    AboutComponent,
    ContactComponent
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
