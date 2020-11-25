interface BusinessDetail {
  message: any;
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_claimed: boolean;
  is_closed: boolean;
  url: string;
  phone: string;
  display_phone: string;
  review_count: number;
  categories: Category[];
  rating: number;
  location: Location;
  coordinates: _Coordinates;
  photos: string[];
  price: string;
  hours: Hour[];
  transactions: any[];
  special_hours: SpecialHour[];
}

interface Category {
  alias: string;
  title: string;
}

interface Hour {
  open: Open[];
  hours_type: string;
  is_open_now: boolean;
}

interface Open {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

interface Location {
  address1: string;
  address2?: string;
  address3?: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
  cross_streets?: string;
}

interface SpecialHour {
  date: Date;
  is_closed: null;
  start: string;
  end: string;
  is_overnight: boolean;
}

interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: _Coordinates;
  transactions: string[];
  price: string;
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

interface Category {
  alias: string;
  title: string;
}

interface _Coordinates {
  latitude: number;
  longitude: number;
}

interface ReviewData {
  message: any;
  reviews: Review[];
  total: number;
  possible_languages: string[];
}

interface Review {
  id: string;
  url: string;
  text: string;
  rating: number;
  time_created: string;
  user: User;
}

interface User {
  id: string;
  profile_url: string;
  image_url: string;
  name: string;
}

interface Category {
  alias: string;
  title: string;
}

interface Price {
  id: number;
  label: string;
}
