  export interface Deeplinks {
      276: string;
      578: string;
  }

  export interface Price {
      country_code: string;
      currency: string;
      price: string;
  }

  export interface Size {
      size_code: string;
      UK: string;
      EUR: string;
      US: string;
  }

  export interface Product {
      sku: string;
      date: string;
      image_url: string;
      color: string;
      deeplinks: Deeplinks;
      prices: Price[];
      sizes: Size[];
  }

  export interface RootObject {
      baseID: string;
      name: string;
      description: string;
      brand: string;
      gender: string;
      family: string;
      brand_image_url: string;
      products: Product[];
  }

