import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PopupModalComponent } from './examples/popup-modal/popup-modal.component';
import { AppService } from './app.service';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // HERE ROUTES DEFINITIONS
  {
    path:'',
    component:AppComponent
 },
]

@NgModule({
  imports: [
    RouterModule,
    BrowserModule, 
    FormsModule, 
    HttpModule,
    NgbModule.forRoot(), 
    RouterModule.forChild(routes)],
  declarations: [
    AppComponent, 
    PopupModalComponent
  ],
  bootstrap: [AppComponent],
  providers: [AppService]
})
export class AppModule { }
