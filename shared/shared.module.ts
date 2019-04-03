import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SHARED_COMPONENTS_LIST } from '.';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Select2Module } from 'ng-select2-component';
import { MaterialModule } from './material-components.Module';
import { SHARED_PIPES_LIST } from './pipes';
import {BsDatepickerModule} from 'ngx-bootstrap/datepicker';
@NgModule({
  imports: [
    Select2Module,
    MaterialModule,
    CommonModule, 
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  declarations: [SHARED_COMPONENTS_LIST],
  entryComponents: [
     
  ],
  exports: [
    Select2Module,
    CommonModule, 
    FormsModule,
    MaterialModule,
    SHARED_COMPONENTS_LIST
  ] , 
  providers: [ SHARED_PIPES_LIST ]
})
export class SharedModule { }
