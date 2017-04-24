import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  @Input() customers: Customer[];
  @Input() selected: Customer;
  @Output() selectedChange: EventEmitter<Customer> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
