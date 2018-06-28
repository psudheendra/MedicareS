export interface Parent2 {
    modelId: string;
}

export interface Parent {
    parent: Parent2;
    cpi: string;
}

export interface SizeCode {
    legacySizeCode: string;
    division: string;
}

export interface SizeDesc {
    region: string;
    desc: string;
}

export interface LegacySize {
    sizeCodes: SizeCode[];
    sizeDescs: SizeDesc[];
}

export interface Data {
    skuLastUpdateBy: string;
    skuLastUpdateDate: string;
    skuNumber: string;
    skuCreateDate?: any;
    skuCreateBy?: any;
    legacySize: LegacySize;
}

export interface RootObject {
    level: string;
    type: string;
    keys: string[];
    parent: Parent;
    data: Data;
}