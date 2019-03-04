import { Component, OnInit } from '@angular/core';

import { Drug } from '../../model/drug';
import { DRUGS } from '../../model/mock-drugs';

@Component({
  selector: 'app-general-view',
  templateUrl: './general-view.component.html',
  styleUrls: ['./general-view.component.css']
})
export class GeneralViewComponent implements OnInit {

  drugs = DRUGS;

  constructor() { }

  ngOnInit() {
  }

}
