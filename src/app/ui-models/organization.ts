import { Meta } from './meta'
import { AccountEntity } from './accounts-entity';

export interface Organization extends AccountEntity{
	_id?:string
	title?:string
	meta?:Meta
	creator?:string
	admins?:Array<string>
	users?:Array<string>
	markdown?:Array<string>
	contact?:{ [key: string]: string; };
	contacttypes?: Array<string>
}
