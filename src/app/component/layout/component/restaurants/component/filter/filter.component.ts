import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR} from '@angular/forms';
import * as deepEqual from 'fast-deep-equal';
import {Subscription} from 'rxjs';
import {RestaurantService} from 'src/app/services/restaurant.service';

export interface FilterOptions {
  price?: Price;
  openNow?: boolean;
  categories?: Category[];
}

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FilterComponent),
      multi: true,
    },
  ],
})
export class FilterComponent implements OnInit, OnDestroy, ControlValueAccessor {
  formGroup: FormGroup;

  readonly prices: Price[];
  readonly categories: Category[];

  private lastInput: FilterOptions;
  private subscription: Subscription;

  constructor(private readonly formBuilder: FormBuilder, restaurantService: RestaurantService) {
    this.prices = restaurantService.prices;
    this.categories = restaurantService.categories;
  }

  get empty(): boolean {
    const {openNow, price, categories} = this.formGroup.value || {};

    return !openNow && null == price && !categories?.length;
  }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      openNow: [],
      price: [],
      categories: [],
    });

    this.subscription = this.formGroup.valueChanges.subscribe(() => {
      this.publish();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  writeValue(value: FilterOptions): void {
    this.lastInput = null == value ? null : {...value};

    if (null == value) {
      value = {};
      Object.keys(this.formGroup.controls).forEach((key) => (value[key] = null));
    }

    this.formGroup.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.formGroup.disable();
    } else {
      this.formGroup.enable();
    }
  }

  private publish(): void {
    const value = {...this.formGroup.value};

    if (deepEqual(this.lastInput, value)) {
      return;
    }

    this.lastInput = value;

    setTimeout(() => this.onChange({...value}));
  }

  displayPrice(price: Price): string {
    return price.label;
  }

  displayCategory(category: Category): string {
    return category.title;
  }

  // noinspection JSUnusedLocalSymbols
  private onChange(value: unknown): void {
  }

  private onTouched(): void {
  }
}
