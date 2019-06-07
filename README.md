import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private static readonly listenersList: any = {};
  private eventsSubject: Subject<any>;
  private events;

  constructor() {
    this.eventsSubject = new Subject();

    this.events = this.eventsSubject.asObservable();

    this.events.subscribe(
      ({ name, args }) => {
        if (this.listeners[name]) {
          for (const listener of this.listeners[name]) {
            listener(...args);
          }
        }
      });
  }

  get listeners() {
    return EventsService.listenersList;
  }

  public on(name, listener): void {
    if (!this.listeners[name]) {
      this.listeners[name] = [];
    }

    this.listeners[name].push(listener);
  }

  public dispatch(name, ...args): void {
    this.eventsSubject.next({
      name,
      args
    });
  }

  public remove(name, listener?: any): void {
    if (this.listeners[name] && listener) {
      for (let index = 0; index < this.listeners[name].length; index++) {
        if (this.listeners[name][index] === listener) {
          this.listeners[name].splice(index, 1);
        }
      }
    } else if (this.listeners[name]) {
      this.listeners[name] = [];
    }
  }

}
