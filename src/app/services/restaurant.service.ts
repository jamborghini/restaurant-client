import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Business} from 'src/app/interface/restaurant';
import {BusinessDetail} from 'src/app/interface/restaurant-details';
import {ReviewData} from 'src/app/interface/review';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {

  constructor(readonly http: HttpClient) {
  }

  findAll(): Observable<Business[]> {
    return this.http.get<Business[]>('http://localhost:3000/businesses/search');
  }

  findOne(id): Observable<BusinessDetail> {
    return this.http.get<BusinessDetail>(`http://localhost:3000/businesses/${id}`);
  }

  findReviewById(id): Observable<ReviewData> {
    return this.http.get<ReviewData>(`http://localhost:3000/businesses/${id}/reviews`);
  }
}
