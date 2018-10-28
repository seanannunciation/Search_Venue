import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.components';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent , UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
