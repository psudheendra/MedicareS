
    export interface BrandGroup {
        brandGroupAbbr: string;
        brandGroupDesc: string;
    }

    export interface GenderAge {
        key: string;
        value: string;
    }

    export interface Fob {
        key: string;
        value: string;
    }

    export interface Url {
        url: string;
        urlType: string;
        resolution: string;
        Country: string;
        Region: string;
        OtherAttr: string;
    }

    export interface Data {
        desc: string;
        brandGroup: BrandGroup;
        genderAge: GenderAge;
        fob: Fob;
        urls: Url[];
    }

    export interface PriceModel {
        level: string;
        type: string;
        keys: string[];
        parent?: any;
        data: Data;
        modelId: string;
    }

