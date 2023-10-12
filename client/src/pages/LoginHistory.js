import React, { useEffect, useState } from 'react'
import axios from 'axios';
import "../assets/css/login-history.css";

const LoginHistory = () => {
    
    const [loginStatus,setLoginStatus] = useState([]);
    
    const getLoginData = async () =>{
        await axios.post(`http://localhost:5000/get/login_details_all`,{name:localStorage.getItem("user_name")}).then((resp)=>{
            console.log(resp.data);
            setLoginStatus([...resp.data])
        })
    }
    
    useEffect(()=>{
        getLoginData();
    },[])

    

  return (
    <>
    <section className="login-history-page">
    <table>
        <thead>
            <tr>
                <th>date</th>
                <th>Punch-In Time</th>
                <th>Punch-Out Time</th>
                <th>total break Time</th>
                <th>total Login Time</th>
            </tr>
        </thead>
        <tbody>
            {loginStatus.map((item)=>(
                <tr>
                <td>{`${new Date(item.date).getUTCDay()}/${new Date(item.date).getUTCMonth()+ 1}/${new Date(item.date).getUTCFullYear()}`}</td>
                <td>{`${new Date(item.punchIn).getUTCHours() > 12 ? new Date(item.punchIn).getUTCHours() - 12 : "0" + new Date(item.punchIn).getUTCHours() + ":"+ new Date(item.punchIn).getUTCMinutes() + ":"}` }{new Date(item.punchIn).getUTCHours() < 12 ? "AM" :"PM"} </td>
                <td>{item.puchout == null ? "NOT LOGOUT" : <>{`${new Date(item.puchout).getUTCHours() > 12 ?  new Date(item.puchout).getUTCHours() - 12 : "0"+ new Date(item.puchout).getUTCHours() + ":"+ new Date(item.puchout).getUTCMinutes() + ":"}` }{new Date(item.puchout).getUTCHours() < 12 ? "AM" :"PM"}</> }</td>
                <td>{ item.puchout == null ? "NOT LOGOUT" : <>{`${new Date(item.total_break_time).getUTCHours() < 10 ? "0" + new Date(item.total_break_time).getUTCHours() : new Date(item.total_break_time).getUTCHours()}:${new Date(item.total_break_time).getUTCMinutes() < 10 ? "0" + new Date(item.total_break_time).getUTCMinutes() : new Date(item.total_break_time).getUTCMinutes()}`}</> }</td>
                <td>{item.puchout == null ? "NOT LOGOUT" : <>{`${new Date(item.total_login_time).getUTCHours() < 10 ? "0" + new Date(item.total_login_time).getUTCHours() : new Date(item.total_login_time).getUTCHours()}:${new Date(item.total_login_time).getUTCMinutes() < 10 ? "0" + new Date(item.total_login_time).getUTCMinutes() : new Date(item.total_login_time).getUTCMinutes()}`}</> }</td>
            </tr>
            ))}

        </tbody>
    </table>
    </section>
    </>
  )
}

export default LoginHistory