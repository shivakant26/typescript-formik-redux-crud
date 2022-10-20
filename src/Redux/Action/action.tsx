import { Iwish } from "../../Models/wish";
import { ADD_WISH, TRASH_WISH , EDIT_WISH, UPDATE_WISH } from "../actionType";


export const addWish = (data:Iwish) =>{
    return {
        type:ADD_WISH,
        payload:data
    }
}

export const trashWish = (id:number) =>{
    return {
        type:TRASH_WISH,
        payload:id
    }
}

export const editWish = (id:number) =>{
    return {
        type:EDIT_WISH,
        payload:id
    }
}

export const updateWish = (id:number,data:any) =>{
    return {
        type:UPDATE_WISH,
        payload:id,
        data:data
    }
}