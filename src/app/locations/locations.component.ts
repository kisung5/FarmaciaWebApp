import { Component, OnInit } from '@angular/core';

import { Location } from '../location';
import { LOCATIONS } from '../mock-locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations = LOCATIONS;

  editField: string;

  awaitingPersonList: Array<any> = [ ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.locations[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.locations[id]);
    this.locations.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.locations.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
