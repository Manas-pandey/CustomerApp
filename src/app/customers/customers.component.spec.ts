import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';
import { CustomerCardComponent } from './customer-card/customer-card.component';
import { Customer } from '../common/customer';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;
  const customer:Customer[] =  [{
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
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomersComponent ,CustomerCardComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 6 customers',() => {
    component.customers = customer;
    expect(component.customers.length).toEqual(6);
  })
  it('should have 6 cards', () => {
    component.customers = customer;
    component.remove(3);
    fixture.detectChanges();
    let cards = fixture.nativeElement.querySelectorAll('.card')
    expect(cards.length).toEqual(5);
  });

});
