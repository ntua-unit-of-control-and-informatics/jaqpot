import { MetaInfo } from './metaInfo';


export interface Organization {
    _id?: string;

    meta?: MetaInfo;

    ontologicalClasses?: Array<string>;

    visible?: boolean;

    temporary?: boolean;

    featured?: boolean;

    capabilities?: { [key: string]: number; };

    organizationPic?: string;

    userIds?: Array<string>;

    about?: string;

    website?: string;

    contact?: string;

    city?: string;
    
    country?: string;

}