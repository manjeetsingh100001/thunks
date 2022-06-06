import { loginActionTypes } from "./action";
const initState={
    loading:false,
    error:false,
    isAuth:false,
    token:""
}

export const loginReducer=(state=initState,action) =>{
    switch(action.type){
        case loginActionTypes.USER_LOADING:{
            return {
                ...state,
                loading:true,
                error:false,
            }
        }
        case loginActionTypes.USER_SUCCESS:{
            return {
                ...state,
                loading:false,
                error:false,
                isAuth:true,
                token:action.payload
            }
        }
        case loginActionTypes.USER_FAILURE:{
            return{
                ...state,
                loading:false,
                error:true,
                isAuth:false,
            }
        }
        default:
            return state;


    }
}