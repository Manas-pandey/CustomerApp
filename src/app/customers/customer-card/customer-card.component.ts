import { Component, OnInit, Input, Output } from '@angular/core';
import { Customer } from 'src/app/common/customer';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.css']
})
export class CustomerCardComponent implements OnInit {
  @Input()
  customers: Customer[];

  @Output()
  delEvent: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  
  deleteCustomer(id: number): void {
    alert("Card deleted "+id)
    this.delEvent.next(id);
  }

}
