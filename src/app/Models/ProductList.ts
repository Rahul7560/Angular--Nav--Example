export interface Rating {
  rate: number;
  count: any;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}


export interface ProductListing {
  Products : Product[]
}
