import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdktestRoutingModule } from './cdktest-routing.module';
import { LoadindicatorComponent } from './loadindicator/loadindicator.component';

@NgModule({
  imports: [
    CommonModule,
    CdktestRoutingModule
  ],
  declarations: [LoadindicatorComponent],
  entryComponents: [LoadindicatorComponent]
})
export class CdktestModule { }
