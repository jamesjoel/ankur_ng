import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserInfoRoutingModule } from './user-info-routing.module';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    UserInfoRoutingModule
  ],
  declarations: [LazyComponent]
})
export class UserInfoModule { }
