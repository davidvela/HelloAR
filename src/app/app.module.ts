import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppWebcamComponent } from './Components/app-webcam/app-webcam.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import { MasterComponent } from './Components/master/master.component';
import { AppDetailComponent } from './Components/app-detail/app-detail.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppWebcamComponent,
    ToolbarComponent,
    MasterComponent,
    AppDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
