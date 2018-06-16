import { Component } from '@angular/core';
import { SetupUser } from '../../../models/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../signin/signin.component.scss']
})
export class SignupComponent {
  protected user: SetupUser;
  constructor() {
    this.user = new SetupUser();
  }
}
