import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from './core.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  btnTxt = 'Toggle Actors/Managers';
  state;
  constructor(
    private coreService: CoreService
  ) {}

  toggle() {
    this.state = this.state === 'managers' ? 'actors' : 'managers';
    this.coreService.listState$$.next(this.state);
  }

  ngOnInit() {
    this.state = this.coreService.state;
  }
}
