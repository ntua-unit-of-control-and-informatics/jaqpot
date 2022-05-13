import { Meta } from './meta'
import { Spent } from './spent';
import { AccountEntity } from './accounts-entity';

export interface User extends AccountEntity{
    _id?:string
	meta?:Meta
	emailVerified?:boolean
	name?:string
	preferredUsername?:string
	givenName?:string
	familyName?:string
	email?:string
	occupation?:string
	occupationAt?:string
	credits?:string
	spenton?:Array<Spent>
	organizations?:Array<string>
}
