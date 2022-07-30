import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Actors, Managers } from './data';

@Injectable()
export class DataService {

  actors = null;
  managers = null;

  loadData(type) {
    if (type=== 'actors' && this.actors) {
      return Observable.of(this.actors);
    }
    if (type=== 'managers' && this.managers) {
      return Observable.of(this.managers);
    }
    if (type === 'actors') {
      return Observable.of(Actors)
        .delay(2000).map(d => {
          this.actors = d;
          return d;
        });
    };
    if (type === 'managers') {
      return Observable.of(Managers)
        .delay(2000).map(d => {
          this.managers = d;
          return d;
        });
    };
  }

}