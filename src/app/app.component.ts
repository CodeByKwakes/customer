import { Component } from '@angular/core';
import { CustomerService } from './customer/customer.service';
import { Customer } from './customer/customer';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Customer App';
  customers: Observable<Customer[]>;
  constructor(public customerService: CustomerService) {
    // this.customers = customerService.getAllCustomers;
    this.getData()
  }

  getData() {
    this.customerService.getAllCustomers()
      .do(console.log)
      .subscribe(customers => this.customers = customers)
  }
}
