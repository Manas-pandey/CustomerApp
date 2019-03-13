import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerCardComponent } from './customers/customer-card/customer-card.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HoverDirective } from './hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerCardComponent,
    CustomerListComponent,
    HoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
