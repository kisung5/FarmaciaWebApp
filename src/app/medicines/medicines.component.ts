import { Component, OnInit } from '@angular/core';

import { Drug } from '../model/drug';
import { DRUGS } from '../model/mock-drugs';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.css']
})
export class MedicinesComponent implements OnInit {

  drugs = DRUGS;
  editField: string;

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.drugs[id][property] = editField;
  }

  remove(id: any) {
    this.drugs.splice(id, 1);
  }

  add() {
    const person: Drug = {id: this.drugs.length + 1, name: '',
      pharma: '', prescript: 'no', quantity: 0};
    this.drugs.push(person);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
