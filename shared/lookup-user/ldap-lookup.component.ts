import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Select2Option } from 'ng-select2-component';
import { FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { LDAPUser } from '../../models/LDAPUser';
import { LDAPUserService } from './ldap-lookup.service';

@Component({
    selector: 'ldap-user-lookup',
    templateUrl: './ldap-lookup.component.html',
    styleUrls: ['./ldap-lookup.component.scss'],
    providers: [LDAPUserService]
})
export class LdapLookupComponent implements OnInit {
    public ldapUserList: Select2Option[] = [];
    public users: LDAPUser[] = new Array();
    public showInfoInput: boolean = false;
    public value: any;
    filteredUsers = <any>[];

    @Input() placeholderHeading: string = 'User';
    @Input() frmField: string = '';
    @Input() parentForm: FormGroup; 
    @Input() required: boolean; 
    @Input() displayFieldName : string  = this.frmField; 
    @Output() selectedRow: EventEmitter<Select2Option> = new EventEmitter<Select2Option>();
    
    subscription = null;

    constructor(private userService: LDAPUserService) {

    }
    ngOnInit(): void {

    }
    initialiseLookUp() {
        let options: Select2Option[] = [];
        let option = { value: "0", label: "Please enter 3 or more characters" };
        options.push(option);
        this.ldapUserList = options;
    }

    public onUserSelected(val){
        if (val !== undefined) {
            let selectedOption : Select2Option = this.ldapUserList.filter(r=>r.value == val)[0] ; 
            if (selectedOption != null) {
                this.selectedRow.emit(selectedOption);
            }
        }
    }

    public searchUser(searchString: string) {
        if (searchString.length >= 3) {
            this.showInfoInput = true;
            let options: Select2Option[] = [];
            let option = { value: "0", label: "searching..." };
            options.push(option);
            this.ldapUserList = options;

            this.userService.getSearchedUser(searchString)
                .pipe( 
                        distinctUntilChanged(),
                        debounceTime(2000)
                    )
                .subscribe((users: LDAPUser[]) => {
                    let options: Select2Option[] = [];
                    for (let user of users) {
                        var displayName = user.DisplayName;
                        if (user.JobTitle!=null)
                        {
                            var displayName = user.DisplayName + ' - ' + user.JobTitle;
                        }
                        let option = { value: user.Alias, label: displayName };
                        options.push(option);
                    }
                    this.ldapUserList = options;
                });
        }
        else {
            let options: Select2Option[] = [];
            let remainingChar = 3 - searchString.length;
            let option = { value: "0", label: "Please enter " + remainingChar + " or more characters" };
            options.push(option);
            this.ldapUserList = options;
        }
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
