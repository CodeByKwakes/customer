import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from './customer.service';
import { CustomerContainerComponent } from './customer-container/customer-container.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CustomerContainerComponent, CustomerListComponent, CustomerDetailComponent],
  providers: [CustomerService],
  exports: [CustomerContainerComponent, CustomerListComponent, CustomerDetailComponent]
})
export class CustomerModule { }
