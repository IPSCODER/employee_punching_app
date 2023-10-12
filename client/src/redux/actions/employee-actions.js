import * as types from "./action-type"
import axios from "axios"


 const getLoginUser = (user) =>({
    type:types.GET_LOGIN_DETAILS_USER,
    payload:user
})


export const getLoginUserData = () =>{
    return function(dispatch){
        axios.get(`http://localhost:5000/get/login_details_user/${localStorage.getItem("user_name")}`).then((resp)=>{
            // console.log(resp.data);
            dispatch(getLoginUser(resp.data))
        })
    }
}