import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
 // Tu instancies ton objet avec des valeurs initiales
 model: User = new User("", "", "", "");

 constructor() { }

 onSubmit(): void {
  // form submitted
  console.log(this.model);

}
}
