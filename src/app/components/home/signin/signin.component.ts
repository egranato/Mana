import { Component } from '@angular/core';
import { SetupUser } from '../../../models/models';
import { ApiService } from '../../../services/api.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  protected user: SetupUser;
  constructor(
    private api: ApiService
  ) {
    this.user = new SetupUser();
  }
  public login(): void {
    this.api
      .login(this.user)
      .subscribe(
        (response: any) => {
          this.api.setToken(response.token);
        },
        (failure: any) => {
          console.error(failure);
        }
      );
  }
}
