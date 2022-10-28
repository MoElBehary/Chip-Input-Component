import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TagInputModule } from 'ngx-chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ChipInputComponent } from './chip-input/chip-input.component';
import { FormControlComponent } from './form-control/form-control.component';
import { FormOutputComponent } from './form-output/form-output.component';



@NgModule({
  declarations: [
    ChipInputComponent,
    FormControlComponent,
    FormOutputComponent,
  ],
  imports: [
    CommonModule,
    TagInputModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[
    FormControlComponent
  ]
})
export class FormModule { }
