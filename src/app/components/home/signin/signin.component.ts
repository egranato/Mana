import { Component } from '@angular/core';
import { SetupUser } from '../../../models/models';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  protected user: SetupUser;
  constructor() {
    this.user = new SetupUser();
  }
}
