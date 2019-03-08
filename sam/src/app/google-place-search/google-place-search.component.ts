import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Observable, of} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, switchMap, tap, finalize, catchError} from 'rxjs/operators';
import { UserSelectionService } from './user-selection.service';


@Component({
  selector: 'app-google-place-search',
  templateUrl: './google-place-search.component.html',
  styleUrls: ['./google-place-search.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class GooglePlaceSearchComponent implements OnInit {
  public model: any;
  filteredUsers = [];
  isLoading= false;
  searching = false;
  searchFailed = false;

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this._userService.getUsersList(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          })).pipe(
            map(data => {
              console.log(data);
              return data;
            })
          )
      ),
      tap(() => this.searching = false)
    );

    formatter = (x: {DisplayName: string}) => x.DisplayName;

  constructor(private _userService: UserSelectionService) { 
    console.log('inject');
  }

  ngOnInit() {
     
  }

}
