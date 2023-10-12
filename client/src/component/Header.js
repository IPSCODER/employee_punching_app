import React, { useEffect, useState } from 'react'
import "../assets/css/punchBreaks.css"
import { Link } from 'react-router-dom'

const Header = () => {
  const [ham,setHam] = useState(false)
  const [month,setMonth]= useState('')


  useEffect(()=>{
    if (new Date().getMonth() === 0  ) {
      setMonth("Jan")
    }else if (new Date().getMonth() === 1  ) {
      setMonth("Feb")
    }else if (new Date().getMonth() === 2  ) {
      setMonth("Mar")
    }else if (new Date().getMonth() === 3  ) {
      setMonth("APR")
    }else if (new Date().getMonth() === 4  ) {
      setMonth("MAY")
    }else if (new Date().getMonth() === 5  ) {
      setMonth("JUN")
    }else if (new Date().getMonth() === 6  ) {
      setMonth("JUl")
    }else if (new Date().getMonth() === 7  ) {
      setMonth("AUG")
    }else if (new Date().getMonth() === 8  ) {
      setMonth("SEP")
    }else if (new Date().getMonth() === 9  ) {
      setMonth("OCT")
    }else if (new Date().getMonth() === 10  ) {
      setMonth("NOV")
    }else if (new Date().getMonth() === 11  ) {
      setMonth("DEC")
    }

  },[])


  const hamburger = () =>{
    setHam(prev => !prev)
  }


  return (
    <header>
    <Link to={"/"} className="logo">
    <svg xmlns="http://www.w3.org/2000/svg" width="92.912" height="25.306" viewBox="0 0 92.912 25.306">
            <g id="Group_365" data-name="Group 365" transform="translate(4614 4398)">
              <g id="NITS_LOGO" transform="translate(-4614 -4398)">
                <rect id="Rectangle_58" data-name="Rectangle 58" width="92.912" height="6.075" transform="translate(0 3.481)" fill="#29abe2"/>
                <g id="Group_344" data-name="Group 344" transform="translate(0)">
                  <g id="Group_342" data-name="Group 342" transform="translate(0)">
                    <path id="Path_308" data-name="Path 308" d="M748.783,643.713h-5.145v-9.485a3.787,3.787,0,0,0-.627-2.427,2.046,2.046,0,0,0-1.656-.756,2.853,2.853,0,0,0-1.093.225,4.529,4.529,0,0,0-1.061.627,4.816,4.816,0,0,0-.917.948,4.506,4.506,0,0,0-.627,1.19v9.678h-5.144V626.832h4.63v2.83a6.149,6.149,0,0,1,2.637-2.331,8.946,8.946,0,0,1,3.923-.82,5.107,5.107,0,0,1,2.636.6,4.267,4.267,0,0,1,1.544,1.543,5.992,5.992,0,0,1,.724,2.074,14.082,14.082,0,0,1,.177,2.186Z" transform="translate(-716.995 -621.017)" fill="#000"/>
                    <path id="Path_309" data-name="Path 309" d="M1251.867,486.166V481.5h5.144v4.662Zm0,18.034V487.319h5.144V504.2Z" transform="translate(-1216.672 -481.504)" fill="#000"/>
                    <path id="Path_310" data-name="Path 310" d="M1464.147,507.589a20.394,20.394,0,0,1-2.427.837,10.1,10.1,0,0,1-2.749.385,6.649,6.649,0,0,1-1.816-.241,4.046,4.046,0,0,1-1.495-.772,3.6,3.6,0,0,1-1.013-1.4,5.322,5.322,0,0,1-.37-2.09V495.5h-2.154v-3.891h2.154V486.24h5.144v5.369h3.441V495.5h-3.441v7.042a1.377,1.377,0,0,0,1.479,1.576,3.929,3.929,0,0,0,1.189-.193,7.322,7.322,0,0,0,1.062-.418Z" transform="translate(-1409.34 -486.061)" fill="#000"/>
                    <path id="Path_311" data-name="Path 311" d="M1802.835,643.786a13.263,13.263,0,0,1-4.184-.681,9.554,9.554,0,0,1-3.487-1.981l1.807-3.107a15.034,15.034,0,0,0,2.964,1.617,7.522,7.522,0,0,0,2.773.571,2.8,2.8,0,0,0,1.521-.349,1.135,1.135,0,0,0,.539-1.014,1.194,1.194,0,0,0-.682-1.062,10.521,10.521,0,0,0-2.393-.84q-1.68-.475-2.838-.919a7.99,7.99,0,0,1-1.886-.983,3.188,3.188,0,0,1-1.046-1.236,3.953,3.953,0,0,1-.317-1.649,5.184,5.184,0,0,1,1.9-4.089,6.626,6.626,0,0,1,2.108-1.141,8.232,8.232,0,0,1,2.647-.412,11.747,11.747,0,0,1,3.5.507,8.765,8.765,0,0,1,3.154,1.839l-1.965,3.043a13.408,13.408,0,0,0-2.536-1.426,5.787,5.787,0,0,0-2.155-.444,2.727,2.727,0,0,0-1.4.333,1.233,1.233,0,0,0,.048,2.108,10.248,10.248,0,0,0,2.3.76,29.313,29.313,0,0,1,3,.951,8.014,8.014,0,0,1,1.981,1.062,3.608,3.608,0,0,1,1.109,1.347,4.31,4.31,0,0,1,.349,1.806,4.754,4.754,0,0,1-1.839,3.931A7.791,7.791,0,0,1,1802.835,643.786Z" transform="translate(-1739.385 -621.017)" fill="#000"/>
                    <path id="Path_312" data-name="Path 312" d="M27.234-373.872a1.812,1.812,0,0,1-.471-1.255,1.9,1.9,0,0,1,.6-1.386,2.024,2.024,0,0,1,1.491-.6,2.164,2.164,0,0,1,.811.157,1.461,1.461,0,0,1,.654.523L37.7-366.81a2.016,2.016,0,0,1,.418,1.2,2.151,2.151,0,0,1-.471,1.308l-7.323,9.573a1.785,1.785,0,0,1-1.465.732,1.982,1.982,0,0,1-1.491-.628,1.936,1.936,0,0,1-.6-1.36,2.009,2.009,0,0,1,.471-1.308l6.382-8.317Z" transform="translate(54.798 379.236)" fill="#000"/>
                    <path id="Path_313" data-name="Path 313" d="M.471,19.878A1.812,1.812,0,0,0,0,21.133a1.9,1.9,0,0,0,.6,1.386,2.025,2.025,0,0,0,1.491.6,2.164,2.164,0,0,0,.811-.157,1.461,1.461,0,0,0,.654-.523l7.376-9.625a2.016,2.016,0,0,0,.418-1.2A2.151,2.151,0,0,0,10.88,10.3L3.557.732A1.785,1.785,0,0,0,2.092,0,1.982,1.982,0,0,0,.6.628,1.936,1.936,0,0,0,0,1.988,2.009,2.009,0,0,0,.471,3.3l6.382,8.317Z" transform="translate(11.351 25.306) rotate(180)" fill="#000"/>
                  </g>
                  <rect id="Rectangle_57" data-name="Rectangle 57" width="2.58" height="22.575" rx="1.29" transform="translate(78.547 2.309) rotate(17)" fill="#000"/>
                </g>
              </g>
            </g>
          </svg>  
    </Link>
    <nav className="time">
      <h3>{new Date().getHours() < 12 ? "Good Morning," : new Date().getHours() > 12 && new Date().getHours() < 17 ? "good afternoon," : new Date().getHours() > 17 && new Date().getHours() < 19 ? "good evening," : "good night," } <span>{localStorage.getItem("user_name")}</span></h3>
      <h4>{new Date().getDay() < 10 ? "0"+new Date().getDay():new Date().getDay()} {month} <span>{new Date().getFullYear()}</span></h4>
    </nav>
    <nav className={ham ? "acions change" : "acions"}>
      <Link to={"/login-history"} >Login history</Link>
      <Link onClick={()=>{localStorage.clear("auth"); localStorage.clear("user_type"); localStorage.clear("user_name"); window.location.reload(); }} >Logout</Link>
    </nav>

    <label for="checkbox" className={ham ? "hamburger mobile change": "hamburger mobile"} onClick={hamburger} >
        <span className="line line--top"></span>
        <span className="line line--middle"></span>
        <span className="line line--bottom"></span>
      </label>

  </header>
  )
}

export default Header