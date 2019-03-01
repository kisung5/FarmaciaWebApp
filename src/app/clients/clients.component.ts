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

  awaitingPersonList: Array<any> = [ ];

  constructor() { }

  ngOnInit() {
  }

  updateList(id: number, property: string, event: any) {
    const editField = event.target.textContent;
    this.clients[id][property] = editField;
  }

  remove(id: any) {
    this.awaitingPersonList.push(this.clients[id]);
    this.clients.splice(id, 1);
  }

  add() {
    if (this.awaitingPersonList.length > 0) {
      const person = this.awaitingPersonList[0];
      this.clients.push(person);
      this.awaitingPersonList.splice(0, 1);
    }
  }

  changeValue(id: number, property: string, event: any) {
    this.editField = event.target.textContent;
  }
}
