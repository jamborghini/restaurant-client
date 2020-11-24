import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: 'star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent implements OnInit {

  @Input() starCount: number;
  rating: string[];

  constructor() {
  }

  ngOnInit(): void {
    const stars = (rating: number, total = 5): string[] => {
      const result: string[] = [];

      for (let i = 0; i < total; i++) {
        if (rating >= i + 1) {
          result.push('star');
        } else if (rating > i) {
          result.push('star_half');
        } else {
          result.push('star_border');
        }
      }

      return result;
    };

    this.rating = stars(this.starCount);
  }

}
