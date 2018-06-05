import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  template: '<input type="text" (input)="onUserInput($event)" [value]="name"><p>Hello {{ name }}!</p>'
  // Event binding ( (input) ), property binding ( [value] ) and string interpolation ( {{name}} )
})
export class UserComponent {
  name = 'Max';

  onUserInput(event) {
    this.name = event.target.value;
  }
}
