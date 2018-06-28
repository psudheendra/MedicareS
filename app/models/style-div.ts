export interface Parent2 {
        modelId: string;
    }

    export interface Parent {
        parent: Parent2;
        cpi: string;
    }

    export interface Data {
        legacyStyleId: string;
        division: string;
    }

    export interface RootObject {
        level: string;
        type: string;
        keys: string[];
        parent: Parent;
        data: Data;
    }