import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {QuestionsComponent} from './custommodules/quiz/questions/questions.component';
import {HomeComponent} from './app/home/home.component';

export const appRoutes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'questions', component: QuestionsComponent},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }