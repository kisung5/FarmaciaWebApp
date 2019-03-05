import { Component, OnInit } from '@angular/core';
import { DRUGS } from '../../../model/mock-drugs';

@Component({
  selector: 'app-recipie',
  templateUrl: './recipie.component.html',
  styleUrls: ['./recipie.component.css']
})
export class RecipieComponent implements OnInit {

  drugs = DRUGS;

  constructor() { }

  ngOnInit() {
  }

}
