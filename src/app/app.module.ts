import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import {QuizModule} from '../custommodules/quiz/quiz.module';
import {ServicesModule} from '../services/services.module';
import {AppRoutingModule} from '../router.module';
import {MaterialModule} from '../material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  imports:      [ AppRoutingModule , BrowserModule, BrowserAnimationsModule, FormsModule, QuizModule,HttpClientModule,ServicesModule,
      MaterialModule],
  declarations: [ AppComponent,HelloComponent, HomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
