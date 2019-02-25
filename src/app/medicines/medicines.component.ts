import { Component, OnInit } from '@angular/core';

import { Drug } from '../drug';
import { DRUGS } from '../mock-drugs';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  drugs = DRUGS;
  editField: string;
  awaitingPersonList: Array<any> = [ ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.drugs[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.drugs[id]);
    this.drugs.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.drugs.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
