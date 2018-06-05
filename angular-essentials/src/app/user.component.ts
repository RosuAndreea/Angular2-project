import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<input type="text" [(ngModel)]="name"><p>Hello {{ name }}!</p>'
})
export class UserComponent {
  @Input() name = 'Max';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
