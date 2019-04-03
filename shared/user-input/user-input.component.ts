import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'user-input',
    templateUrl: 'user-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => UserInputComponent),
            multi: true
        }
    ]
})

export class UserInputComponent  implements ControlValueAccessor {
    @Input() placeholderHeading: string = '';

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