import {
    MatButtonModule,
    MatCardModule,
    MatRadioModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCardModule, MatRadioModule],
    exports: [MatButtonModule, MatCardModule, MatRadioModule]
})
export class MaterialModule { }
