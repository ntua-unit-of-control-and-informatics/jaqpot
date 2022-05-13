import { Meta } from './meta';

export interface Invitation{
    _id?:string
    Meta?:Meta
    From?:string
    FromId?:string
    To?:string
    EmailTo?:string
    Body?:string
    Viewed?:boolean
    InvitationTo?:string
    InvitationToId?:string
    Action?:string
}