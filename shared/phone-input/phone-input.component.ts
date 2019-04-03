import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
    selector: 'phone-input',
    templateUrl: 'phone-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => PhoneInputComponent),
            multi: true
        }
    ]
})

export class PhoneInputComponent  implements ControlValueAccessor {
    @Input() placeholderHeading: string = 'Phone';
    @Input() frmField: string = '';
    @Input() parentForm: FormGroup; 
    @Input() required: boolean; 
    @Input() displayFieldName : string  = this.frmField; 
    @Input() readonly : boolean  = false;
    
    private currencyValue: number;
    private onTouchedCallback: () => {};
    private onChangeCallback: (_: any) => {};

    constructor() {
         
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

    getFieldName(){
        return this.frm[this.frmField];
    }
}