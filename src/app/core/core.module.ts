import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CustomerModule } from '../customer/customer.module';

@NgModule({
  imports: [
    CommonModule,
    CustomerModule
  ],
  declarations: [SidebarComponent],
  exports: [SidebarComponent]
})
export class CoreModule { }
