import {Component, OnInit, ViewChild} from '@angular/core';
import {RestaurantService} from 'src/app/services/restaurant.service';
import {Business} from 'src/app/interface/restaurant';
import {MatRadioButton} from '@angular/material/radio';
import {Category} from 'src/app/interface/category';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss'],
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
        max-height: 28em !important;
      }
    `,
  ],
})
export class RestaurantsComponent implements OnInit {

  public restaurants: Business[];
  isLoading: boolean;
  @ViewChild('isOpen') isOpen: MatRadioButton;

  readonly prices: string[] = ['All', '$', '$$', '$$$', '$$$$'];
  priceChecked: number;

  categoryChecked: number;
  readonly categories: Category[] = [
    {alias: 'bars', title: 'Bars'},
    {alias: 'bbq', title: 'Barbeque'},
    {alias: 'breakfast_brunch', title: 'Breakfast & Brunch'},
    {alias: 'bubbletea', title: 'Bubble Tea'},
    {alias: 'buffets', title: 'Buffets'},
    {alias: 'burgers', title: 'Burgers'},
    {alias: 'cocktailbars', title: 'Cocktail Bars'},
    {alias: 'desserts', title: 'Desserts'},
    {alias: 'french', title: 'French'},
    {alias: 'japanese', title: 'Japanese'},
    {alias: 'korean', title: 'Korean'},
    {alias: 'latin', title: 'Latin American'},
    {alias: 'mexican', title: 'Mexican'},
    {alias: 'mexican', title: 'Mexican'},
    {alias: 'newamerican', title: 'American (New)'},
    {alias: 'pizza', title: 'Pizza'},
    {alias: 'salad', title: 'Salad'},
    {alias: 'sandwiches', title: 'Sandwiches'},
    {alias: 'seafood', title: 'Seafood'},
    {alias: 'southern', title: 'Southern'},
    {alias: 'steak', title: 'Steakhouses'},
    {alias: 'sushi', title: 'Sushi Bars'},
    {alias: 'tacos', title: 'Tacos'},
    {alias: 'tea', title: 'Tea Rooms'},
    {alias: 'thai', title: 'Thai'},
    {alias: 'tradamerican', title: 'American (Traditional)'},
    {alias: 'wine_bars', title: 'Wine Bars'},
    {alias: 'wraps', title: 'Wraps'},
  ];

  constructor(readonly restaurantService: RestaurantService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.restaurantService.findAll().subscribe(data => {
      this.restaurants = data;
      this.isLoading = false;
    });
  }

  toggleOpen(): void {
    this.isOpen.checked ? this.isOpen.checked = false : this.isOpen.checked = true;
  }

}
