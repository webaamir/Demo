import { Component, OnDestroy, OnInit, Injectable } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';


@Component({
    selector: 'base-component',
    templateUrl: 'base.component.html',
})

@Injectable()
export abstract class BaseComponent implements OnInit, OnDestroy {
    protected _subscriptions: Subscription[] = [];
    abstract ngOnInit(): void;
    
    constructor(){

    }

    ngOnDestroy() {
        if (this._subscriptions)
            this._subscriptions.forEach(s => s.unsubscribe());
    }
}