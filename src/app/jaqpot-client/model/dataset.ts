/**
 * Jaqpot API
 * Jaqpot v4 (Quattro) is the 4th version of a YAQP, a RESTful web service which can be used to train machine learning models and use them to obtain toxicological predictions for given chemical compounds or engineered nano materials. The project is written in Java8 and JEE7.
 *
 * OpenAPI spec version: 4.0.3
 * Contact: hampos@me.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import { DataEntry } from './dataEntry';
import { FeatureInfo } from './featureInfo';
import { MetaInfo } from './metaInfo';

export interface Dataset {
  meta?: MetaInfo;

  ontologicalClasses?: Array<string>;

  visible?: boolean;

  temporary?: boolean;

  featured?: boolean;

  datasetURI?: string;

  byModel?: string;

  dataEntry?: Array<DataEntry>;

  features?: Array<FeatureInfo>;

  totalRows?: number;

  totalColumns?: number;

  descriptors?: Array<Dataset.DescriptorsEnum>;

  existence?: Dataset.ExistenceEnum;

  id?: string;

  _id?: string;

  onTrash?: boolean;
}
export namespace Dataset {
  export enum DescriptorsEnum {
    EXPERIMENTAL = <any>'EXPERIMENTAL',
    IMAGE = <any>'IMAGE',
    GO = <any>'GO',
    MOPAC = <any>'MOPAC',
    CDK = <any>'CDK',
    PREDICTED = <any>'PREDICTED',
    FORPREDICTION = <any>'FORPREDICTION',
  }
}

export namespace Dataset {
  export enum ExistenceEnum {
    EXPERIMENTAL = <any>'EXPERIMENTAL',
    UPLOADED = <any>'UPLOADED',
    CREATED = <any>'CREATED',
    TRANFORMED = <any>'TRANSFORMED',
    PREDICTED = <any>'PREDICTED',
    DESCRIPTORSADDED = <any>'DESCRIPTORSADDED',
    FORPREDICTION = <any>'FORPREDICTION',
  }
}
