import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  //create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Esmee", "Samarripa", "esmeeSamarripa@email.com", 4000),
    new SalesPerson("John", "Doe", "johnDoe@email.com", 3000),
    new SalesPerson("Alex", "Day", "alexDay@email.com", 6000),
    new SalesPerson("Eric", "House", "ericHouse@email.com", 3000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
