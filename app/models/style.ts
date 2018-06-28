export interface Parent {
    modelId: string;
}

export interface Url {
    url: string;
    urlType: string;
    resolution: string;
    Country: string;
    Region: string;
    OtherAttr: string;
}

export interface SimpleColor {
    key: string;
    value: string;
}

export interface Color {
    colorOrder: string;
    complexColor: string;
    simpleColor: SimpleColor;
}

export interface RetailPriceCurrent {
    countrycode: string;
    currency: string;
    price: string;
}

export interface Banner {
    key: string;
    value: string;
}

export interface WebsiteBanner {
    defaultCartPrice?: number;
    banner: Banner;
}

export interface Data {
    cpi: string;
    introDate: string;
    urls: Url[];
    colors: Color[];
    retailPriceCurrent: RetailPriceCurrent[];
    websiteBanners: WebsiteBanner[];
}

export interface RootObject {
    level: string;
    type: string;
    keys: string[];
    parent: Parent;
    data: Data;
}
