import { HttpClient } from '@angular/common/http'; 
import { Observable,of } from 'rxjs';
import {Injectable} from '@angular/core';
import quizQuestions from '../contents/data.json';
@Injectable()
export class QuestionsService {

   constructor(private http: HttpClient) {
        
    }

    public getQuestions(): Observable<any> {
        return of(quizQuestions);
    }
}