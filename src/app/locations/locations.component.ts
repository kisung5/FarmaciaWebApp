import { Component, OnInit } from '@angular/core';

import { Location } from '../model/location';
import { LOCATIONS } from '../model/mock-locations';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  locations = LOCATIONS;

  editField: string;

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.locations[id][property] = editField;
  }

  remove(id: any) {
    this.locations.splice(id, 1);
  }

  add() {
    const person: Location = {id: this.locations.length + 1, name: '',
      about: '', address: '', chief: ''};
    this.locations.push(person);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
