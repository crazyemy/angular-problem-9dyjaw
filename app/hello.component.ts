import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { CoreService } from './core.service';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html'
})
export class HelloComponent {
  list = null;
  loading = false;

  constructor(
    private coreService: CoreService,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.coreService.listState$$.subscribe( s => {
      this.getList(s);
    });
  }

  getList(type) {
    this.loading = true;
    this.dataService.loadData(type)
      .subscribe(list => {
        this.list = list;
        this.loading = false;
      });
  }

  setActiveUser(item) {
    this.list.items.forEach(a => {
      a.show = item.id === a.id;
    })
  }
}
