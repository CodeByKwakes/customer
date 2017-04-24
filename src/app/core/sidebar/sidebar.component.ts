import { Component, OnInit, Input } from '@angular/core';
import { Customer } from '../../customer/customer';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  selectedCustomer: Customer;
  @Input() customers: Customer[];
  constructor() { }

  ngOnInit() {
  }

}
