export interface ReviewData {
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
