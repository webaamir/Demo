import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap';


@Component({
    selector: 'date-input',
    templateUrl: 'date-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateInputComponent),
            multi: true
        }
    ]
})

export class DateInputComponent  implements ControlValueAccessor {
    @Input() placeholderHeading: string = 'Date';
    @Input() frmField: string = '';
    @Input() parentForm: FormGroup; 
 
    private currencyValue: number;
    private onTouchedCallback: () => {};
    private onChangeCallback: (_: any) => {};
    datePickerConfig : Partial<BsDatepickerConfig>;
    
    constructor() {
        this.datePickerConfig = Object.assign({},
            {
              containerClass: 'theme-dark-blue',
              dateInputFormat : 'DD/MM/YYYY'
            });
    }

    get value(): any {
        return this.currencyValue;
    }

    set value(v: any) {
        if (v !== this.currencyValue) {
            this.currencyValue = v;
        }
        this.onChangeCallback(v);
    }

    onBlur() {
        this.onTouchedCallback();
    }

    writeValue(value: any) {
        if (value !== this.currencyValue) {
            this.currencyValue = value;
        }
    }
    
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    get frm() { return this.parentForm.controls; }
}