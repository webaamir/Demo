import {
    throwError as observableThrowError, Observable
} from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, debounceTime, take } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


@Injectable()
export class UserSelectionService {
    constructor(private http: HttpClient) {
    }

    public getUsersList(user: string): Observable<any[]> {
        let API_ENDPOINT = 'https://itreporter.slb.com/CoreData/api/' +  'directoryaccounts/Users/Search?key=' + user;

        let filterUsers = this.http.get(API_ENDPOINT).
            pipe(
                map(res => {
                
                    return <any[]>res;
                }),
                catchError((err) => {
                    return observableThrowError(err.error);
                }
                ));
        return filterUsers;
    }//end of UsersList
}