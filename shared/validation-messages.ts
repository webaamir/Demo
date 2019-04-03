import { Injectable } from "@angular/core";

@Injectable()
export class ValidationMessage{
    SELECTED_ROW_INDEX     : number      = -1;
    generalConfiguration : any = {
      required: 'Please enter the name filed value',
      maxlength : 'Maximum of 255 characters are allowed'
    }
}
