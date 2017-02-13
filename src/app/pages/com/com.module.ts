/**
 * Created by Tonis on 13.02.2017.
 */
import {NgModule}      from '@angular/core';
import {CommonModule}  from '@angular/common';
import {ComComponent} from './com.component';
import {routing} from './com.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    ComComponent
  ]
})
export class ComModule {
}
