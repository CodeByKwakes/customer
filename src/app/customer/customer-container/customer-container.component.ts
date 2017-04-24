import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-container',
  templateUrl: './customer-container.component.html',
  styleUrls: ['./customer-container.component.css']
})
export class CustomerContainerComponent implements OnInit {
  selectedCustomer: Customer;
  @Input() customers: Customer[];
  constructor() { }

  ngOnInit() {
  }

}
