import { Component, OnInit } from '@angular/core';
import {QuestionsService} from '../../../services/questions.service';
import {Questions} from './questions.model';

@Component({
  selector: 'questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  correctCount = 0;
  currentQuestion = 0;
  progressValue = 0;
  questionCount;
  questions$;
  selectedOption;
  CONGRATULATIONS = 'assets/img/congratulations.jpg';
  TRY_AGAIN = 'assets/img/try-again.png';

  // image urls overridden by Data URLs in constructor for stackblitz workaround
  constructor(private QuestionsService: QuestionsService) {
    this.CONGRATULATIONS = 'Completed';
  }

  ngOnInit() {
    this.questions$ = this.QuestionsService.getQuestions();
    this.questions$.subscribe((questions: Questions[]) => {
        this.questionCount = questions['questions'].length;
        this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
    });
  }Questions

  nextQuestion(answer: number) {
    if (answer === this.selectedOption) {this.correctCount++; }
    delete this.selectedOption;
    this.currentQuestion++;
    this.progressValue = 100 * (this.currentQuestion + 1) / this.questionCount;
  }
}
