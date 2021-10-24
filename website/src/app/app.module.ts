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
import { UCDLandingComponent } from './component/views/csci-5839/landing/landing.component';
import { ProjectPitchComponent } from './component/views/csci-5839/project-pitch/project-pitch.component';
import { UserResearchComponent } from './component/views/csci-5839/user-research/user-research.component';
import { PrototypeComponent } from './component/views/csci-5839/prototype/prototype/prototype.component';

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
  },
  {
    path: 'ucd',
    component: UCDLandingComponent,
  },
  {
    path: 'ucd/project-pitch',
    component: ProjectPitchComponent,
  },
  {
    path: 'ucd/user-research',
    component: UserResearchComponent,
  },
  {
    path: 'ucd/prototype',
    component: PrototypeComponent,
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
    UCDLandingComponent,
    ProjectPitchComponent,
    UserResearchComponent,
    PrototypeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled'
    }),
  ],
  exports: [
    FadeInComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
