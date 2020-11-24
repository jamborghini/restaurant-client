import {Component, OnInit} from '@angular/core';
import {RestaurantService} from 'src/app/services/restaurant.service';
import {BusinessDetail} from 'src/app/interface/restaurant-details';
import {ActivatedRoute, Router} from '@angular/router';
import {ReviewData} from 'src/app/interface/review';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {

  restaurant: BusinessDetail;
  reviewData: ReviewData['reviews'];

  isLoadingB: boolean;
  isLoadingR: boolean;

  constructor(
    readonly restaurantService: RestaurantService,
    readonly activatedRoute: ActivatedRoute,
    readonly route: Router) {
  }

  ngOnInit(): void {
    this.isLoadingB = true;
    this.isLoadingR = true;
    const id = this.activatedRoute.snapshot.params.id;

    this.restaurantService.findOne(id).subscribe(data => {
      this.restaurant = data;
      this.isLoadingB = false;
    }, (err) => {

      this.route.navigate(['/']);
      throw err;
    });

    this.restaurantService.findReviewById(id).subscribe(data => {
      this.isLoadingR = false;
      this.reviewData = data.reviews;
    }, ((err) => {

      this.route.navigate(['/']);
      throw err;
    }));
  }
}
