import { Component, Input } from '@angular/core';

@Component({
  selector: 'item',
  template: '<div>{{text}}</div>'
})
export class ItemComponent {
  @Input() text;
}
