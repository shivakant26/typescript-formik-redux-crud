import { Iwish } from "../../Models/wish";
import { ADD_WISH , TRASH_WISH , EDIT_WISH ,UPDATE_WISH} from "../actionType";


const initialState : { saved: Iwish[] } = {
    saved:[]
}

const authReducer = (state=initialState , action:any) =>{
    switch(action.type){
        case ADD_WISH :
            let wish = state.saved;
            wish.push(action.payload)
            return{
                ...state,
                saved:wish
            }
            case TRASH_WISH:
            let trashwish = state.saved;
            trashwish.splice(action.payload-1,1)
            return{
                ...state,
                saved:trashwish
            }
            case EDIT_WISH:
            let list = state.saved;
            let id = action.payload;
            let object = list[id-1]
            return{
                ...state,
                currentObject :object,
                id:id  
            }
            case UPDATE_WISH:
                debugger;
            let updatelist = state.saved;
            updatelist.splice(action.payload-1,1,action.data)
            return{
                ...state,
                saved:updatelist
                 
            }
            default :
            return state
    }
}


export default authReducer;