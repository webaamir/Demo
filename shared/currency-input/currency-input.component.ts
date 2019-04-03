import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup } from '@angular/forms';

@Component({
    selector: 'currency-input',
    templateUrl: 'currency-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => CurrencyInputComponent),
            multi: true
        }
    ]
})

export class CurrencyInputComponent  implements ControlValueAccessor {
    @Input() placeholderHeading: string = '';
    @Input() currencyCode : string = 'USD';
    @Input() frmField: string = '';
    @Input() parentForm: FormGroup; 
    @Input() cssClass: string ='' ;
    
    @Input() isReadOnly : boolean = false;
    

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
}

