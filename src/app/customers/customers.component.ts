import { Component, OnInit } from '@angular/core';
import { Customer } from '../common/customer';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  originalCustomers:Customer[] = [];
  customers:Customer[] = [];
  searchText:string = "";
  mode:string = 'card'

  constructor() { 
  
  }

  ngOnInit() {
    this.customers =this.originalCustomers =  [{
      'id': 1,
      'firstName': 'Rachel',
      'lastName': 'Green ',
      'gender': 'female',
      'address': 'Blore'
    },
    {
      'id': 2,
      'firstName': 'Chandler',
      'lastName': 'Bing',
      'gender': 'male',
      'address': 'West Street'
    },
    {
      'id': 3,
      'firstName': 'Joey',
      'lastName': 'Tribbiani',
      'gender': 'male',
      'address': 'Kattegat'
    },
    {
      'id': 4,
      'firstName': 'Monica',
      'lastName': 'Geller',
      'gender': 'female',
      'address': 'some address'
    },
    {
      'id': 5,
      'firstName': 'Ross',
      'lastName': 'Geller',
      'gender': 'male',
      'address': 'some address '
    },
     {
      'id': 6,
      'firstName': 'Phoebe',
      'lastName': 'Buffay',
      'gender': 'female',
      'address': 'some address'
    }];
  }
  remove(id:number):void{
    let idx = -1;
    this.customers.forEach( (c ,index) => {
      if(c.id === id){
        idx=index;
      }
    });
    if (idx >= 0){
      this.customers.splice(idx,1)
    }
}
  filterCustomer() {
    const result: Customer[] = [];
    this.originalCustomers.forEach( (c) => {
      if (c.firstName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0
        || c.lastName.toUpperCase().indexOf(this.searchText.toUpperCase()) >= 0) {
          result.push(c);
        }
   });
  this.customers = result;
}
}
