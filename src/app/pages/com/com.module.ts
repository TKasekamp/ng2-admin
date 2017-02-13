/**
 * Created by Tonis on 13.02.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {ComComponent} from './com.component';
import {routing} from './com.routing';
import {KComComponent} from "./kcom/kcom.component";
import {ComService} from "../../theme/services/com/com.service";

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  providers: [
    ComService
  ],
  declarations: [
    ComComponent,
    KComComponent
  ]
})
export class ComModule {
}
