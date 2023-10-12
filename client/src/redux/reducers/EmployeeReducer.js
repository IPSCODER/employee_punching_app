import * as types from "../actions/action-type"

const initialState ={
    reducer_:"employee",
    login_details_user:{},
}

export const employeeReducer = (state=initialState,action) =>{
    switch(action.type){
        case types.GET_LOGIN_DETAILS_USER:
            return {
                ...state,
                login_details_user:action.payload
            }
            default:
               return state;
    }

}

