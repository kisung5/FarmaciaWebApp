import { Component, OnInit } from '@angular/core';

import { Doctor } from '../model/doctor';
import { DOCTORS } from '../model/mock-doctors';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors = DOCTORS;

  editField: string;

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.doctors[id][property] = editField;
  }

  remove(id: any) {
    this.doctors.splice(id, 1);
  }

  add() {
    const person: Doctor = {id: this.doctors.length + 1, idd: 0, docnum: 0, name: '',
      lastname: '', address: '', birthday: ''};
    this.doctors.push(person);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
