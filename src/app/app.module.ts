import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CleanCodeBodyPanelComponent } from './blocks/clean-code-body-panel/clean-code-body-panel.component';
import { ProfileBodyPanelComponent } from './blocks/profile-body-panel/profile-body-panel.component';
import { ProjectsBodyPanelComponent } from './blocks/projects-body-panel/projects-body-panel.component';
import { ContactBodyPanelComponent } from './blocks/contact-body-panel/contact-body-panel.component';
import { CvBodyPanelComponent } from './blocks/cv-body-panel/cv-body-panel.component';
import { PhotoBodyPanelComponent } from './blocks/photo-body-panel/photo-body-panel.component';
import { SidePanelComponent } from './blocks/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    CleanCodeBodyPanelComponent,
    ProfileBodyPanelComponent,
    ProjectsBodyPanelComponent,
    ContactBodyPanelComponent,
    CvBodyPanelComponent,
    PhotoBodyPanelComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
