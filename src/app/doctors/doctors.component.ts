import { Component, OnInit } from '@angular/core';

import { Doctor } from '../doctor';
import { DOCTORS } from '../mock-doctors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors = DOCTORS;

  editField: string;

  awaitingPersonList: Array<any> = [ ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.doctors[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.doctors[id]);
    this.doctors.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.doctors.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
