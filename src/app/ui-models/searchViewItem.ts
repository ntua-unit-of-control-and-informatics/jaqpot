import { MetaInfo } from '../jaqpot-client';

export interface SearchViewItem {
  type?: string;
  color?: string;
  meta?: MetaInfo;
  _id?: string;
  cols?: number;
  rows?: number;
}
