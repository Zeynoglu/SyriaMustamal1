
export interface Ad {
  id: string;
  title: string;
  price: number;
  currency: string;
  category: string;
  location: string;
  imageUrl: string;
  images?: string[]; // Optional array for carousel
  date: string;
  description: string;
  seller: {
    name: string;
    verified: boolean;
  };
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  slug: string;
}

export enum AppRoute {
  HOME = 'home',
  AD_DETAILS = 'ad-details',
  POST_AD = 'post-ad',
  SEARCH_RESULTS = 'search'
}
