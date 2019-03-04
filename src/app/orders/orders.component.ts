import { Component, OnInit } from '@angular/core';

import { Order } from '../model/order';
import { ORDERS } from '../model/mock-orders';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders = ORDERS;

  newOrders: Order[];
  preOrders: Order[];
  facOrders: Order[];
  retOrders: Order[];

  constructor() {
    this.newOrders = [];
    this.preOrders = [];
    this.facOrders = [];
    this.retOrders = [];
  }

  ngOnInit() {
    this.clasify();
    this.sort(this.newOrders);
    this.sort(this.preOrders);
    this.sort(this.facOrders);
    this.sort(this.retOrders);
  }

  clasify(): void {
    for (const order of this.orders) {
      console.log('esta entrando');
      if ( order.status === 'nuevo') {
        this.newOrders.push(order);
      } else if (order.status === 'preparado') {
        this.preOrders.push(order);
      } else if (order.status === 'facturado') {
        this.facOrders.push(order);
      } else {
        this.retOrders.push(order);
      }
    }
  }

  sort( array: Order[]): void {
    for (const a of array) {
      for (let j = 0; j < array.length - 1; j++) {

        if (Date.parse(array[j].date) > Date.parse(array[j + 1].date)) {
          console.log(array[j].date);
          let swap = array[j];
          array[j] = array[j + 1];
          array[j + 1] = swap;
        }
      }
    }
  }

  moveNext( order: Order, sitting: string): void {
    if ( sitting === 'n') {
      this.preOrders.push(order);
      this.newOrders.splice(this.newOrders.indexOf(order), 1);
      this.sort(this.preOrders);
      this.sort(this.newOrders);
    } else if (sitting === 'p') {
      this.facOrders.push(order);
      this.preOrders.splice(this.preOrders.indexOf(order), 1);
      this.sort(this.facOrders);
      this.sort(this.preOrders);
    } else if (sitting === 'f') {
      this.retOrders.push(order);
      this.facOrders.splice(this.facOrders.indexOf(order), 1);
      this.sort(this.retOrders);
      this.sort(this.facOrders);
    } else {
      this.retOrders.splice(this.retOrders.indexOf(order), 1);
      this.sort(this.retOrders);
    }
  }

  logout(): void {

  }
}
