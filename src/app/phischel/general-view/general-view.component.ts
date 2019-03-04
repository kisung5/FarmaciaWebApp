import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
  }

  ngOnInit() {
  }

  logout(): void {
    this.loggedIn = false;
  }

}
