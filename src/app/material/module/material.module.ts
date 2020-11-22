import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatListModule} from '@angular/material/list';

const modules = [
  MatButtonModule,
  MatRadioModule,
  MatIconModule,
  MatMenuModule,
  MatCheckboxModule,
  MatListModule,
];

@NgModule({
  declarations: [],
  imports: [
    modules,
    CommonModule,
  ],
  exports: [modules],
})
export class MaterialModule {
}
