import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ProjectsPageComponent } from './projects-page/projects-page.component';
import { ExperiencePageComponent } from './experience-page/experience-page.component';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    WelcomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ExperiencePageComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    WelcomePageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    ExperiencePageComponent
  ]
})
export class PagesModule { }
