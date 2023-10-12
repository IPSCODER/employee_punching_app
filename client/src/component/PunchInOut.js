import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "../assets/css/punchBreaks.css";
import { Link } from 'react-router-dom';
import useTime from '../cutsom-hooks/useTime';
import useGetTime from '../cutsom-hooks/useGetTime';



const PunchInOut = () => {
  const [ip,setIp] = useState("")
  const [breakStatus,setBreakStatus]= useState({
    break_id:"",
    break_in:"",
    break_out:"",
    date:"",
    e_id:"",
    row_id:"",
    t_break_time:"",
  })
  const [loginStatus,setLoginStatus] = useState({
    breaks_status:'',
    date:'',
    e_id:'',
    login_status:'',
    puchout:'',
    punchIn:'',
    total_break_time:'',
    total_login_time:'',
  });
  const punchInTime = useTime(loginStatus.punchIn);
  const punchOutTime = useTime(loginStatus.puchout);
  const breakInTime = useTime(breakStatus.break_in);
  const breakOutTime = useTime(breakStatus.break_out);
  const total_breakOut_time = useGetTime(loginStatus.total_break_time)
  const total_loginOut_time = useGetTime(loginStatus.total_login_time)


  

  const getLoginData = async () =>{
    const response = await axios.get("https://ipinfo.io?token=b7b877c4cb02d2");
    setIp(response.data.ip);
    await axios.get(`http://localhost:5000/get/login_details_user/${localStorage.getItem("user_name")}`).then((resp)=>{
      console.log(resp.data);
      setLoginStatus({...resp.data})
    })

  }

  const getBreakData = async () =>{
     await axios.post("http://localhost:5000/post/lastBreak",{name:localStorage.getItem("user_name"),time:`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`}).then((data)=>{
      setBreakStatus({...data.data})
    })
  }
  
  useEffect(()=>{
    getLoginData();
    getBreakData();
    
    },[])


  const punchIn = async () =>{
    await axios.post("http://localhost:5000/post/punchIn",{name:localStorage.getItem("user_name"),system:`${navigator.userAgentData.platform}-mobile:${navigator.userAgentData.mobile}-IP:${ip}`})
    getLoginData();
  }

  const punchOut = async () =>{
    await axios.put("http://localhost:5000/put/punchOut",{name:localStorage.getItem("user_name"),system:`${navigator.userAgentData.platform}-mobile:${navigator.userAgentData.mobile}-IP:${ip}`})
    getLoginData();
  }

  const breakIn = async () =>{
    await axios.post("http://localhost:5000/post/breakIn",{name:localStorage.getItem("user_name")})
    getLoginData();
    getBreakData();
  }

  const breakOut = async () =>{
    await axios.put("http://localhost:5000/put/breakOut",{name:localStorage.getItem("user_name")})
    getLoginData();
    getBreakData();
  }


  return (
    <section className='section-punch-breaks' >

  <div className="punch-in-container">
    <div className="punch-display">
    <h4>Punch In Time <span>{loginStatus.punchIn ? punchInTime.hour : "00"}:{loginStatus.punchIn ? punchInTime.min : "00"} {loginStatus.punchIn ? punchInTime.mid : "AM"}</span> </h4>
    <h4>Total Break Time <span>{loginStatus.total_break_time ? `${total_breakOut_time.hour} : ${total_breakOut_time.min} : ${total_breakOut_time.sec}`  : "00:00:00" }</span> </h4>
    <h4>Punch Out Time<span>{loginStatus.puchout ? punchOutTime.hour : "00"}:{loginStatus.puchout ? punchOutTime.min : "00"} {loginStatus.puchout ? punchOutTime.mid : "AM"}</span> </h4>
    <h4>Login hours <span>{loginStatus.total_login_time ? `${total_loginOut_time.hour} : ${total_loginOut_time.min} : ${total_loginOut_time.sec}`  : "00:00:00" }</span> </h4>
    </div>
    <div className="break-status">
      <h2>CURRENT STATUS {loginStatus.login_status === undefined || loginStatus.login_status ==="DEACTIVE" ? <span>NOT LOGIN</span> : <span>{loginStatus.breaks_status === "NO" && loginStatus.login_status === "ACTIVE" ? "WORKING" :"ON BREAK" }</span> } </h2>

      <div className="break-display">
        <p>BREAK IN</p>
        <span>{breakInTime.hour ? breakInTime.hour : "00"}:{breakInTime.min ? breakInTime.min :"00"}:{breakInTime.sec ? breakInTime.sec :"00" }</span>
        <p>BREAK OUT</p>
        <span>{breakOutTime.hour ? breakOutTime.hour :"00"}:{breakOutTime.min ? breakOutTime.min :"00"}:{breakOutTime.sec ? breakOutTime.sec :"00"}</span>
      </div>
    </div>
    <div className="punch-break-actions">
      {loginStatus.login_status === "DEACTIVE" ? <button disabled={true} >punch in</button> :  <button onClick={punchIn} disabled={loginStatus.login_status == "ACTIVE" ? true : false }  style={{background : loginStatus.login_status == "ACTIVE" ? "#0009" : "#000"}}  >punch in</button>  }
      <button onClick={breakIn} disabled={loginStatus.breaks_status == "NO" && loginStatus.login_status === "ACTIVE" ? false : true  } style={{background : loginStatus.breaks_status == "NO" && loginStatus.login_status === "ACTIVE" ? "#000" : "#0009" }} >Break In</button>
      <button onClick={breakOut} disabled={loginStatus.breaks_status == "NO" ? true : false || JSON.stringify(loginStatus) === '{}' && true  } style={{background : loginStatus.breaks_status == "NO" ? "#0009" : "#000" || JSON.stringify(loginStatus) === '{}' && "#0009" }} >Break out</button>
      <button onClick={punchOut} disabled={loginStatus.breaks_status == "NO" && loginStatus.login_status === "ACTIVE" ? false : true } style={{background : loginStatus.breaks_status == "NO" && loginStatus.login_status === "ACTIVE" ? "#000" : "#0009"}}  >punch out</button>
    </div>
  </div>
    </section>
  )
}

export default PunchInOut
