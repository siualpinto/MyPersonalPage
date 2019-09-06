import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelComponent } from './blocks/side-panel/side-panel.component';
import { BodyPanelComponent } from './blocks/body-panel/body-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    BodyPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
