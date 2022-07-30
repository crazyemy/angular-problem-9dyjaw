import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Actors, Managers } from './data';

@Injectable()
export class CoreService {
  state = 'actors';
  listState$$ = new BehaviorSubject(this.state);
}