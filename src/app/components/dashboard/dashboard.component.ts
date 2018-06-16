import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public displayItems: {
    assets: number,
    weaponry: number,
    resources: number
  };
  constructor(
    private api: ApiService
  ) { }
  ngOnInit() {
    this.api
      .checkToken()
      .then((result) => {
        console.log(result);
        this.api
          .getUserParameters()
          .subscribe(
            (results: any) => {
              this.displayItems = results;
            },
            (failure: any) => {
              throw failure;
            }
          );
      }).catch((error) => {
        console.error(error);
      });
  }
}
