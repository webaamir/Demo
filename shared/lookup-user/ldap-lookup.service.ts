import {
    throwError as observableThrowError, Observable
} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, take } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { LDAPUser } from '../../models/LDAPUser';
import { API_ENDPOINTS_SETTING } from '../api-endpoints-setting.service';

@Injectable()
export class LDAPUserService {
    constructor(private http: HttpClient, 
                private _webApiEndPointSetting: API_ENDPOINTS_SETTING ) {
    }

    public getSearchedUser(user: string): Observable<LDAPUser[]> {
        let API_ENDPOINT =  this._webApiEndPointSetting.IT_REPORTER + '/' +  'directoryaccounts/Users/Search?key=' + user;

        let filterUsers = this.http.get(API_ENDPOINT).
            pipe(
                map(res => {
                
                    return <LDAPUser[]>res;
                }),
                catchError((err) => {
                    return observableThrowError(err.error);
                }
                ));
        return filterUsers;
    }//end of UsersList
}