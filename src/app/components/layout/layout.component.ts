import {Component, OnInit, ViewChild} from '@angular/core';
import {MatRadioButton} from '@angular/material/radio';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  styles: [
      `
      /deep/ .mat-checkbox-frame,
      /deep/ .mat-checkbox-background {
        border-radius: 50% !important;
      }

      /deep/ .mat-menu-panel {
        border: 1px solid #C8C8C8 !important;
        border-radius: unset !important;
        margin-top: -1px;
        box-shadow: 0 6px 5px rgba(0, 0, 0, 0.1), inset 0 -1px 0 #C8C8C8 !important;
      }
    `,
  ],
})


export class LayoutComponent implements OnInit {

  @ViewChild('isOpen') isOpen: MatRadioButton;
  prices: number[] = [20, 35, 50, 60, 80, 90];
  categories: string[] = ['All', 'Steakhouses', 'Seafood', 'Italian', 'Japanese', 'American'];
  checked: number;

  constructor() {
  }

  toggleOpen(): void {
    this.isOpen.checked ? this.isOpen.checked = false : this.isOpen.checked = true;
  }

  check(element): void {
    console.log(element);
  }

  ngOnInit(): void {
  }

}
