import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Customer } from './customer';
import 'rxjs/Rx';

@Injectable()
export class CustomerService {

  constructor(private http: Http) { }

  getAllCustomers() {
    return this.http.get('http://beta.json-generator.com/api/json/get/VkCoTefEg')
      .map(res => res.json())
      .map(rawCustomers => rawCustomers.map(Customer.create));
  }
}
