import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { DummyDisplayComponent } from './dummy-display/dummy-display.component';
import { DummyDialogDisplayComponent } from './dummy-dialog-display/dummy-dialog-display.component';
import { MaterialModule } from './material/material.module';


@NgModule({
  declarations: [
    AppComponent,
    DummyDisplayComponent,
    DummyDialogDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
