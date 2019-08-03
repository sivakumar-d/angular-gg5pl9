import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from './questions/questions.component';
import {MaterialModule} from '../../material.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [QuestionsComponent],
  imports: [
    CommonModule, FormsModule, MaterialModule, RouterModule
  ]
})
export class QuizModule { }
