import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormControl, FormGroup } from '@angular/forms';
import { UserSelectionService } from './user-selection.service';
import { debounceTime, distinctUntilChanged, take, publishReplay, map, switchMap, tap, finalize } from 'rxjs/operators';
@Component({
    selector: 'user-selection',
    templateUrl: 'user-selection.component.html'

    
})

export class UserSelectionComponent implements OnInit   {
    @Input() placeholderHeading: string = '';
    @Input() frmField: string = '';
    @Input() parentForm: FormGroup; 


    
    private onTouchedCallback: () => {};
    private onChangeCallback: (_: any) => {};

    constructor(private _userService: UserSelectionService) {
         
    }

    searchUser : FormControl = new FormControl();
    filteredUsers = <any>[];
   // val = this.parentForm.get(this.frmField);
    subscription = [] ;
    isLoading : boolean =false;
    ngOnInit(): void  {
   /* this.subscription = this.parentForm.get(this.frmField).valueChanges.pipe(debounceTime(3000),distinctUntilChanged()).subscribe(
        () => {
                        if (this.parentForm.get(this.frmField).value !== '') {
                                this._userService.getUsersList(this.parentForm.get(this.frmField).value).subscribe(
                                data  => {
                                    this.filteredUsers= data;
                                     this.filteredUsers.forEach(el => {
                                     el.title = el.GIN.concat(" - ", el.DisplayName);
                                    //console.log(el.title );
                                });
                            })
                        }
                    });

*/

        var subUsers  =  this.parentForm
                    .get(this.frmField)
                    .valueChanges
                    .pipe(
                        distinctUntilChanged(),
                        debounceTime(2000),
                            tap(() => this.isLoading = true),
                            switchMap(value =>  
                                this._userService.getUsersList(value)
                            .pipe(
                                finalize(() => this.isLoading = false),
                                )
                            )
                        )
                        .subscribe(users => {
                            this.filteredUsers= users;
                                        this.filteredUsers.forEach(el => {
                                        el.title = el.GIN.concat(" - ", el.DisplayName);
                                })
                            });
        //this.subscription.push(subUsers);

    }
  
 

    onBlur() {
        this.onTouchedCallback();
    }

 
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }
    
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.forEach(el => {
                el.unsubscribe();
            });
        }
      }
     
      getUserDetail(userName: string, jobTitle: string): string{
        return jobTitle!=null? userName + ' (' + jobTitle + ')' : userName;
      }
}

/*
export interface User {
    gin: string;
    displayName: string;
    title: string;
    alias: string;
}
*/