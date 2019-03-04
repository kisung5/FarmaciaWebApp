import { Component, OnInit } from '@angular/core';

import { Drug } from '../../../model/drug';
import { DRUGS } from '../../../model/mock-drugs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  drugs = DRUGS;

  constructor() { }

  ngOnInit() {
  }

}
