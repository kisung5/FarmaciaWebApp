import { Component, OnInit } from '@angular/core';

import { Role } from '../model/role';
import { ROLES } from '../model/mock-roles';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  roles = ROLES;
  editField: string;

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.roles[id][property] = editField;
  }

  remove(id: any) {
    this.roles.splice(id, 1);
  }

  add() {
    const person: Role = {id: this.roles.length + 1, name: '',
      about: ''};
    this.roles.push(person);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}