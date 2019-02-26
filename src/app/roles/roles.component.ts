import { Component, OnInit } from '@angular/core';

import { Role } from '../role';
import { ROLES } from '../mock-roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles = ROLES;
  editField: string;
  awaitingPersonList: Array<any> = [ ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.roles[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.roles[id]);
    this.roles.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.roles.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}