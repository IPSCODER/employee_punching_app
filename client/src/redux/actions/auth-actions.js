import * as types from "./action-type";
import axios from "axios";

const getUser = (users) =>({
    type:types.GET_USER_INFO,
    payload:users
})

export const getUserData = () =>{
    return function(dispatch){
        axios.get(`http://localhost:5000/get/user`).then((data)=>{
            dispatch(getUser(data.data.data[0]))
        })
    }
}