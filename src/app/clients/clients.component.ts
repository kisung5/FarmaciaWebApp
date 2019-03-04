import { Component, OnInit } from '@angular/core';

import { Clientirl } from '../model/clientirl';
import { CLIENTS } from '../model/mock-clients';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients = CLIENTS;

  editField: string;

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.clients[id][property] = editField;
  }

  remove(id: any) {
    this.clients.splice(id, 1);
  }

  add() {
    const person: Clientirl = {id: this.clients.length + 1, idd: 0, name: '',
      lastname: '', address: '', birthday: '', contact: 0, status: ''};
    this.clients.push(person);
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
