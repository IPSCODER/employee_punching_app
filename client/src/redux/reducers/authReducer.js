import * as types from "../actions/action-type";

const initialState ={
    name:"authentication",
    users:[],
    login:true,
    user:""
}

export const authReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GET_USER_INFO:
            return {
                ...state,
                users:action.payload
            }
            default:
                return state
    }
}