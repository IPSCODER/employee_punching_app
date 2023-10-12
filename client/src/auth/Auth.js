import React, { memo, useEffect, useState } from 'react'
import axios from "axios"
import "./auth.css";

const intialState = {
    user_name:"",
    user_pass:"",
    user_type:""
}

const Auth = ({setAuth,setAuthPath}) => {
  const [cTime,setCtime] = useState("")
    const [userDetails,setUserDetails] = useState(intialState)
    const [authData,setAuthData] = useState([])




    const getData = () =>{
        axios.get("http://localhost:5000/get/user").then((data)=>{
            // console.log(data.data.data[0]);
            setAuthData(data.data.data[0])
        })
      }
    
    useEffect(()=>{
        getData();
        const x= setInterval(()=>{
          setCtime(`${ new Date().getHours() - 12 == 0 ? "12" : new Date().getHours() < 12 ? new Date().getHours() : new Date().getHours() - 12 }:${new Date().getMinutes() < 10 ? "0" +new Date().getMinutes() :new Date().getMinutes()}:${new Date().getSeconds() <10 ? "0" + new Date().getSeconds() :new Date().getSeconds()} ${new Date().getHours() <12 ? "AM" :"PM"}`)
        },1000)
        return () =>{
          clearInterval(x)
        }
    },[])

    const onChangeHandler = (e) =>{
        const {name,value} =e.target;
        setUserDetails({...userDetails,[name]:value})
    }
    const {user_name,user_pass} = userDetails;
    const submitHandler =  (e) =>{
        e.preventDefault();
        console.log(userDetails.user_name,userDetails.user_pass);
         authData.map( async (todo,index)=>{
            if (todo.user_name === userDetails.user_name && todo.user_pass===userDetails.user_pass && todo.user_type === "employee") {
                localStorage.setItem("user_type","employee");
                localStorage.setItem("user_name",userDetails.user_name);
                localStorage.setItem("auth",true);
                // await axios.post(`http://localhost:5000/post/system`,{name:userDetails.user_name,systemId:navigator.platform})
            } else if(todo.user_name === userDetails.user_name && todo.user_pass ===userDetails.user_pass && todo.user_type === "admin"){
                localStorage.setItem("user_type","admin");
                localStorage.setItem("user_name",userDetails.user_name);
                localStorage.setItem("auth",true);
            }
        })
        window.location.reload()
    }


  return (
    <section className='Auth-section' >
<div className="login-container">
        <div className="logo-container">
            <svg xmlns="http://www.w3.org/2000/svg" width="92.912" height="25.306" viewBox="0 0 92.912 25.306">
                <g id="Group_365" data-name="Group 365" transform="translate(4614 4398)">
                  <g id="NITS_LOGO" transform="translate(-4614 -4398)">
                    <rect id="Rectangle_58" data-name="Rectangle 58" width="92.912" height="6.075" transform="translate(0 3.481)" fill="#29abe2"/>
                    <g id="Group_344" data-name="Group 344" transform="translate(0)">
                      <g id="Group_342" data-name="Group 342" transform="translate(0)">
                        <path id="Path_308" data-name="Path 308" d="M748.783,643.713h-5.145v-9.485a3.787,3.787,0,0,0-.627-2.427,2.046,2.046,0,0,0-1.656-.756,2.853,2.853,0,0,0-1.093.225,4.529,4.529,0,0,0-1.061.627,4.816,4.816,0,0,0-.917.948,4.506,4.506,0,0,0-.627,1.19v9.678h-5.144V626.832h4.63v2.83a6.149,6.149,0,0,1,2.637-2.331,8.946,8.946,0,0,1,3.923-.82,5.107,5.107,0,0,1,2.636.6,4.267,4.267,0,0,1,1.544,1.543,5.992,5.992,0,0,1,.724,2.074,14.082,14.082,0,0,1,.177,2.186Z" transform="translate(-716.995 -621.017)" fill="#fff"/>
                        <path id="Path_309" data-name="Path 309" d="M1251.867,486.166V481.5h5.144v4.662Zm0,18.034V487.319h5.144V504.2Z" transform="translate(-1216.672 -481.504)" fill="#fff"/>
                        <path id="Path_310" data-name="Path 310" d="M1464.147,507.589a20.394,20.394,0,0,1-2.427.837,10.1,10.1,0,0,1-2.749.385,6.649,6.649,0,0,1-1.816-.241,4.046,4.046,0,0,1-1.495-.772,3.6,3.6,0,0,1-1.013-1.4,5.322,5.322,0,0,1-.37-2.09V495.5h-2.154v-3.891h2.154V486.24h5.144v5.369h3.441V495.5h-3.441v7.042a1.377,1.377,0,0,0,1.479,1.576,3.929,3.929,0,0,0,1.189-.193,7.322,7.322,0,0,0,1.062-.418Z" transform="translate(-1409.34 -486.061)" fill="#fff"/>
                        <path id="Path_311" data-name="Path 311" d="M1802.835,643.786a13.263,13.263,0,0,1-4.184-.681,9.554,9.554,0,0,1-3.487-1.981l1.807-3.107a15.034,15.034,0,0,0,2.964,1.617,7.522,7.522,0,0,0,2.773.571,2.8,2.8,0,0,0,1.521-.349,1.135,1.135,0,0,0,.539-1.014,1.194,1.194,0,0,0-.682-1.062,10.521,10.521,0,0,0-2.393-.84q-1.68-.475-2.838-.919a7.99,7.99,0,0,1-1.886-.983,3.188,3.188,0,0,1-1.046-1.236,3.953,3.953,0,0,1-.317-1.649,5.184,5.184,0,0,1,1.9-4.089,6.626,6.626,0,0,1,2.108-1.141,8.232,8.232,0,0,1,2.647-.412,11.747,11.747,0,0,1,3.5.507,8.765,8.765,0,0,1,3.154,1.839l-1.965,3.043a13.408,13.408,0,0,0-2.536-1.426,5.787,5.787,0,0,0-2.155-.444,2.727,2.727,0,0,0-1.4.333,1.233,1.233,0,0,0,.048,2.108,10.248,10.248,0,0,0,2.3.76,29.313,29.313,0,0,1,3,.951,8.014,8.014,0,0,1,1.981,1.062,3.608,3.608,0,0,1,1.109,1.347,4.31,4.31,0,0,1,.349,1.806,4.754,4.754,0,0,1-1.839,3.931A7.791,7.791,0,0,1,1802.835,643.786Z" transform="translate(-1739.385 -621.017)" fill="#fff"/>
                        <path id="Path_312" data-name="Path 312" d="M27.234-373.872a1.812,1.812,0,0,1-.471-1.255,1.9,1.9,0,0,1,.6-1.386,2.024,2.024,0,0,1,1.491-.6,2.164,2.164,0,0,1,.811.157,1.461,1.461,0,0,1,.654.523L37.7-366.81a2.016,2.016,0,0,1,.418,1.2,2.151,2.151,0,0,1-.471,1.308l-7.323,9.573a1.785,1.785,0,0,1-1.465.732,1.982,1.982,0,0,1-1.491-.628,1.936,1.936,0,0,1-.6-1.36,2.009,2.009,0,0,1,.471-1.308l6.382-8.317Z" transform="translate(54.798 379.236)" fill="#fff"/>
                        <path id="Path_313" data-name="Path 313" d="M.471,19.878A1.812,1.812,0,0,0,0,21.133a1.9,1.9,0,0,0,.6,1.386,2.025,2.025,0,0,0,1.491.6,2.164,2.164,0,0,0,.811-.157,1.461,1.461,0,0,0,.654-.523l7.376-9.625a2.016,2.016,0,0,0,.418-1.2A2.151,2.151,0,0,0,10.88,10.3L3.557.732A1.785,1.785,0,0,0,2.092,0,1.982,1.982,0,0,0,.6.628,1.936,1.936,0,0,0,0,1.988,2.009,2.009,0,0,0,.471,3.3l6.382,8.317Z" transform="translate(11.351 25.306) rotate(180)" fill="#fff"/>
                      </g>
                      <rect id="Rectangle_57" data-name="Rectangle 57" width="2.58" height="22.575" rx="1.29" transform="translate(78.547 2.309) rotate(17)" fill="#fff"/>
                    </g>
                  </g>
                </g>
              </svg>              
        </div>
        <form id="login-form" onSubmit={submitHandler} >
            <div className="heading">
            <p>Login into your account</p>
            <h1>Employee Login</h1>
        </div>
            <div className="input-container">
            <input type="text" placeholder='Employee Id' name='user_name' id="user_name" value={user_name} onChange={onChangeHandler} autoComplete='off' required /> 
                <svg id="employee" xmlns="http://www.w3.org/2000/svg" width="39.235" height="31.68" viewBox="0 0 39.235 31.68">
                    <g id="Group_354" data-name="Group 354">
                      <g id="Group_353" data-name="Group 353" transform="translate(0 0)">
                        <g id="Group_349" data-name="Group 349" transform="translate(6.041)">
                          <g id="Group_347" data-name="Group 347" transform="translate(6.494)">
                            <path id="Path_314" data-name="Path 314" d="M178.667,56.928a.623.623,0,0,1-.452-.194,1.66,1.66,0,0,1-.248-.4,9.325,9.325,0,0,0-1.1-1.737,5.322,5.322,0,0,0-.437-.513,4.084,4.084,0,0,0-.332-.286,2.479,2.479,0,0,1-.513.427,2.986,2.986,0,0,1-1.775.376h-.033c-.015,0-1.5-.033-3.088.077l-.077.005a3.726,3.726,0,0,0-1.443.284c-.381.2-.6.628-.746,1.423a.663.663,0,0,1-.429.506.65.65,0,0,1-.741-.23,2.675,2.675,0,0,1-.409-1.341l0-.013a7.04,7.04,0,0,1,.041-2.429,5.449,5.449,0,0,1,1.221-1.74,9.776,9.776,0,0,1,4.345-2.069,9.629,9.629,0,0,1,2.6-.2,8.734,8.734,0,0,1,1.476.217,2.2,2.2,0,0,1,1.287.807,2.866,2.866,0,0,1,.307.582,1.5,1.5,0,0,0,.215.4,2.7,2.7,0,0,0,.442.355,4.486,4.486,0,0,1,.587.475,3.765,3.765,0,0,1,1.07,2.072,3.056,3.056,0,0,1-.544,1.888c-.033.056-.194.307-.358.542-.327.478-.483.69-.8.723a.409.409,0,0,1-.059,0Zm-2.705-4.537a1.172,1.172,0,0,1,.646.258l.013.01a4.962,4.962,0,0,1,.662.544,6.092,6.092,0,0,1,.542.631,11.073,11.073,0,0,1,.917,1.346c.043-.066.079-.123.1-.156a1.886,1.886,0,0,0,.373-1.129,2.564,2.564,0,0,0-.725-1.336,3.331,3.331,0,0,0-.421-.337,4.252,4.252,0,0,1-.626-.516,2.472,2.472,0,0,1-.447-.754,1.71,1.71,0,0,0-.176-.35,1.038,1.038,0,0,0-.59-.332,7.281,7.281,0,0,0-1.262-.184,8.976,8.976,0,0,0-6.008,1.931,4.221,4.221,0,0,0-.937,1.321,4.606,4.606,0,0,0-.023,1,2.23,2.23,0,0,1,.6-.465,4.674,4.674,0,0,1,1.936-.424l.074-.005c1.645-.112,3.139-.079,3.2-.079h.036a1.861,1.861,0,0,0,1.1-.189,1.357,1.357,0,0,0,.444-.462.669.669,0,0,1,.437-.312.7.7,0,0,1,.146-.015Zm.467.955s0,0,0,.005S176.429,53.35,176.429,53.347Z" transform="translate(-166.391 -48.848)" fill="#dedede"/>
                            <path id="Path_315" data-name="Path 315" d="M169.239,147.059a5.446,5.446,0,0,1-1.16-.125,5.745,5.745,0,0,1-2.319-1.149,5.933,5.933,0,0,1-1.786-2.547,6.677,6.677,0,0,1-.255-.966,2.77,2.77,0,0,1-.871-.659,2.946,2.946,0,0,1-.685-1.328,2.717,2.717,0,0,1,.927-2.685.614.614,0,1,1,.807.925,1.478,1.478,0,0,0-.536,1.5,1.663,1.663,0,0,0,1.078,1.218.613.613,0,0,1,.437.506,5.867,5.867,0,0,0,.253,1.078,4.744,4.744,0,0,0,1.41,2.013,4.434,4.434,0,0,0,1.806.9,4.119,4.119,0,0,0,1.762,0,3.957,3.957,0,0,0,1.367-.626,4.772,4.772,0,0,0,.909-.838,5.985,5.985,0,0,0,1.2-2.608.619.619,0,0,1,.5-.478c.4-.066.9-.751.958-1.535.038-.542-.143-.879-.539-1.006a.613.613,0,1,1,.376-1.167,1.913,1.913,0,0,1,1.137.937,2.449,2.449,0,0,1,.25,1.326,3.073,3.073,0,0,1-1.561,2.531,6.929,6.929,0,0,1-1.374,2.794,6.067,6.067,0,0,1-1.152,1.057,5.208,5.208,0,0,1-1.778.81A5.512,5.512,0,0,1,169.239,147.059Z" transform="translate(-162.098 -130.597)" fill="#dedede"/>
                          </g>
                          <g id="Group_348" data-name="Group 348" transform="translate(9.801 14.312)">
                            <path id="Path_316" data-name="Path 316" d="M205.471,238.045a.6.6,0,0,1-.271-.064.613.613,0,0,1-.276-.822,4.2,4.2,0,0,0,.447-1.671,1.659,1.659,0,0,0-.087-.6q-.027-.088-.054-.2a.613.613,0,1,1,1.188-.3c.015.059.031.112.046.169a2.837,2.837,0,0,1,.133.971,5.445,5.445,0,0,1-.575,2.184A.622.622,0,0,1,205.471,238.045Z" transform="translate(-204.86 -233.921)" fill="#dedede"/>
                            <path id="Path_317" data-name="Path 317" d="M279.559,239.483a.613.613,0,0,1-.536-.314,5.324,5.324,0,0,1-.71-2.4,2.837,2.837,0,0,1,.133-.971c.008-.023.013-.046.02-.072a.612.612,0,1,1,1.18.327l-.023.077a1.664,1.664,0,0,0-.087.605,4.1,4.1,0,0,0,.554,1.834.613.613,0,0,1-.235.835A.543.543,0,0,1,279.559,239.483Z" transform="translate(-272.631 -235.17)" fill="#dedede"/>
                          </g>
                          <path id="Path_318" data-name="Path 318" d="M104.658,272.407H78.732a.613.613,0,0,1-.613-.611,37.191,37.191,0,0,1,1-9.438,7.709,7.709,0,0,1,.94-2.041,8.012,8.012,0,0,1,3-2.628,8.2,8.2,0,0,1,4.038-.874.6.6,0,0,1,.393.166l2.715,2.547a.613.613,0,0,1-.838.894l-2.542-2.386a6.963,6.963,0,0,0-3.208.746,6.769,6.769,0,0,0-2.529,2.212,6.417,6.417,0,0,0-.792,1.727,34.857,34.857,0,0,0-.945,8.46h24.7a34.857,34.857,0,0,0-.945-8.46,6.5,6.5,0,0,0-.792-1.727,6.747,6.747,0,0,0-2.529-2.212,6.973,6.973,0,0,0-3.219-.746l-2.687,2.4a.613.613,0,0,1-.817-.914l2.856-2.547a.619.619,0,0,1,.383-.156,8.2,8.2,0,0,1,4.038.874,8.012,8.012,0,0,1,3,2.631,7.709,7.709,0,0,1,.94,2.041,37.075,37.075,0,0,1,1,9.438.614.614,0,0,1-.613.608Z" transform="translate(-78.118 -240.727)" fill="#dedede"/>
                        </g>
                        <path id="Path_319" data-name="Path 319" d="M38.622,443.9H.613a.613.613,0,1,1,0-1.226H38.622a.613.613,0,1,1,0,1.226Z" transform="translate(0 -412.218)" fill="#dedede"/>
                        <g id="Group_352" data-name="Group 352" transform="translate(9.26 18.635)">
                          <path id="Path_320" data-name="Path 320" d="M137.875,416.956H122.324a2.585,2.585,0,0,1-2.582-2.582v-.289a.612.612,0,0,1,.613-.613h19.49a.612.612,0,0,1,.613.613v.289A2.587,2.587,0,0,1,137.875,416.956ZM121.006,414.7a1.359,1.359,0,0,0,1.318,1.032h15.548a1.362,1.362,0,0,0,1.318-1.032Z" transform="translate(-119.742 -403.911)" fill="#dedede"/>
                          <path id="Path_321" data-name="Path 321" d="M154.477,300.619H137.664a.612.612,0,0,1-.613-.613v-8.539a1.636,1.636,0,0,1,1.635-1.635h14.769a1.636,1.636,0,0,1,1.635,1.635v8.539A.613.613,0,0,1,154.477,300.619Zm-16.2-1.226h15.587v-7.926a.41.41,0,0,0-.409-.409H138.686a.41.41,0,0,0-.409.409Z" transform="translate(-135.713 -289.832)" fill="#dedede"/>
                          <g id="Group_351" data-name="Group 351" transform="translate(5.065 2.134)">
                            <g id="Group_350" data-name="Group 350" transform="translate(0 0.919)">
                              <path id="Path_322" data-name="Path 322" d="M188.115,333.985a.606.606,0,0,1-.37-.125l-2.261-1.727a.616.616,0,0,1,0-.976l2.261-1.727a.612.612,0,0,1,.743.973l-1.622,1.239,1.622,1.239a.611.611,0,0,1,.115.858.6.6,0,0,1-.488.245Z" transform="translate(-185.244 -329.305)" fill="#dedede"/>
                              <path id="Path_323" data-name="Path 323" d="M277.674,334.033a.612.612,0,0,1-.373-1.1l1.622-1.239-1.622-1.239a.612.612,0,1,1,.743-.973l2.261,1.727a.616.616,0,0,1,0,.976l-2.261,1.727a.64.64,0,0,1-.37.12Z" transform="translate(-269.96 -329.353)" fill="#dedede"/>
                            </g>
                            <path id="Path_324" data-name="Path 324" d="M236.806,323.94a.634.634,0,0,1-.166-.023.615.615,0,0,1-.427-.756l1.476-5.288a.614.614,0,0,1,1.183.33L237.4,323.49A.612.612,0,0,1,236.806,323.94Z" transform="translate(-232.252 -317.424)" fill="#dedede"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
            </div>
            {/* <div className="input-container">
                <input type="text" id="systemid" placeholder="System ID" value={systemId} onChange={(e)=>{setSystemId(e.target.value)}} required />
                <svg id="ipaddress" xmlns="http://www.w3.org/2000/svg" width="33.983" height="34" viewBox="0 0 33.983 34">
                    <path id="Path_325" data-name="Path 325" d="M28.655,2.818H23.433a7.544,7.544,0,0,0-.809-.812A8.6,8.6,0,0,0,16.992,0h0A8.6,8.6,0,0,0,11.36,2.006a7.564,7.564,0,0,0-.809.812H5.328A5.334,5.334,0,0,0,0,8.145V24.088a5.333,5.333,0,0,0,5.328,5.328h6.541v1.336l-1.075.584A1.418,1.418,0,0,0,11.471,34H23.749a1.418,1.418,0,0,0,.677-2.665l-1.075-.584V29.416h5.3a5.334,5.334,0,0,0,5.328-5.328V8.145a5.334,5.334,0,0,0-5.328-5.328Zm-4.51,29.865a.394.394,0,0,1-.4.308H11.471a.409.409,0,0,1-.2-.769l1.226-.666H22.718l1.226.666A.393.393,0,0,1,24.145,32.682Zm-1.8-2.183H12.878V29.416h9.463Zm10.632-6.412a4.323,4.323,0,0,1-4.318,4.318H5.328A4.323,4.323,0,0,1,1.01,24.088V8.145A4.323,4.323,0,0,1,5.328,3.827h4.5a7.635,7.635,0,0,0-.507,1.01H5.128A3.112,3.112,0,0,0,2.019,7.945V21.326a3.112,3.112,0,0,0,3.109,3.109H28.855a3.113,3.113,0,0,0,3.109-3.109V13.076a.5.5,0,1,0-1.009,0v8.249a2.1,2.1,0,0,1-2.1,2.1H5.128a2.1,2.1,0,0,1-2.1-2.1V7.945a2.1,2.1,0,0,1,2.1-2.1H8.977a9.355,9.355,0,0,0-.3,2.18c0,.116,0,.233,0,.349a13.817,13.817,0,0,0,1.275,5.83.5.5,0,0,0,.916-.423A12.817,12.817,0,0,1,9.677,8.375c0-.108,0-.217,0-.325a6.965,6.965,0,0,1,2.336-5.28,7.591,7.591,0,0,1,4.973-1.761A7.59,7.59,0,0,1,21.965,2.77,6.965,6.965,0,0,1,24.3,8.05c0,.108,0,.217,0,.325a12.937,12.937,0,0,1-7.313,11.653A12.959,12.959,0,0,1,11.8,15.475a.5.5,0,1,0-.843.554,13.963,13.963,0,0,0,5.825,5.015.5.5,0,0,0,.211.046.506.506,0,0,0,.211-.046A13.946,13.946,0,0,0,25.314,8.376c0-.116,0-.234,0-.35a9.35,9.35,0,0,0-.3-2.18h3.848a2.1,2.1,0,0,1,2.1,2.1v3.112a.5.5,0,0,0,1.01,0V7.945a3.113,3.113,0,0,0-3.11-3.109H24.667a7.6,7.6,0,0,0-.507-1.009h4.5a4.323,4.323,0,0,1,4.318,4.318V24.088Zm0,0" transform="translate(0 0)" fill="#dedede"/>
                    <path id="Path_326" data-name="Path 326" d="M169.36,43.966a6.153,6.153,0,1,0-6.153-6.153A6.16,6.16,0,0,0,169.36,43.966Zm0-11.3a5.144,5.144,0,1,1-5.144,5.144A5.149,5.149,0,0,1,169.36,32.669Zm0,0" transform="translate(-152.369 -29.557)" fill="#dedede"/>
                    <path id="Path_327" data-name="Path 327" d="M223.889,87.378a.795.795,0,0,0,.708,0,.277.277,0,0,0,.17-.256V82.147a.267.267,0,0,0-.171-.256.869.869,0,0,0-.706,0,.268.268,0,0,0-.168.256v4.975A.277.277,0,0,0,223.889,87.378Zm0,0" transform="translate(-208.866 -76.383)" fill="#dedede"/>
                    <path id="Path_328" data-name="Path 328" d="M252.7,87.374a.794.794,0,0,0,.708,0,.277.277,0,0,0,.17-.256v-1.75h.832a2.539,2.539,0,0,0,.711-.1,1.58,1.58,0,0,0,.583-.307,1.419,1.419,0,0,0,.39-.545,2.119,2.119,0,0,0,.14-.813v-.046a2.151,2.151,0,0,0-.136-.805,1.426,1.426,0,0,0-.378-.545,1.479,1.479,0,0,0-.561-.3,2.46,2.46,0,0,0-.688-.093h-1.538a.416.416,0,0,0-.293.1.308.308,0,0,0-.108.233v4.975a.278.278,0,0,0,.167.256Zm.879-2.837v-1.8h.832a.776.776,0,0,1,.571.207.889.889,0,0,1,.207.648v.092a.889.889,0,0,1-.207.648.776.776,0,0,1-.571.207Zm0,0" transform="translate(-235.765 -76.379)" fill="#dedede"/>
                  </svg>
            </div> */}
            <div className="input-container">
            <input type="password" placeholder='Password' name='user_pass' id="user_pass" value={user_pass}  onChange={onChangeHandler} autoComplete='off' required />
                <svg id="password" xmlns="http://www.w3.org/2000/svg" width="38.611" height="28.314" viewBox="0 0 38.611 28.314">
                    <path id="Path_329" data-name="Path 329" d="M16.9,29.047a16.306,16.306,0,0,1-2.951-.275A1.287,1.287,0,0,1,12.865,27.5a1.308,1.308,0,0,1,1.529-1.266,13.727,13.727,0,0,0,2.506.237c7.624,0,14.246-6.676,16.328-9.009a34.64,34.64,0,0,0-4.556-4.257,1.288,1.288,0,1,1,1.577-2.036,35.169,35.169,0,0,1,5.683,5.5,1.287,1.287,0,0,1,0,1.587C35.586,18.7,27.355,29.047,16.9,29.047Z" transform="translate(2.405 -3.307)" fill="#dedede"/>
                    <path id="Path_330" data-name="Path 330" d="M34.085,5.377a1.287,1.287,0,0,0-1.82,0L28.172,9.47a19.965,19.965,0,0,0-4.878-1.616,16.216,16.216,0,0,0-2.99-.279C9.849,7.574,1.619,17.923,1.274,18.363a1.287,1.287,0,0,0,0,1.587,35.112,35.112,0,0,0,5.678,5.5,30.39,30.39,0,0,0,3.107,2.138L6.525,31.117a1.287,1.287,0,1,0,1.82,1.82L34.085,7.2A1.287,1.287,0,0,0,34.085,5.377ZM8.533,23.416a34.64,34.64,0,0,1-4.556-4.259c2.082-2.332,8.7-9.009,16.328-9.009a13.684,13.684,0,0,1,2.524.237,16.7,16.7,0,0,1,3.4,1.03l-2.371,2.371A6.435,6.435,0,0,0,14.937,22.7l-3,3a27.012,27.012,0,0,1-3.407-2.288Zm8.3-2.606a3.825,3.825,0,0,1-.386-1.653,3.874,3.874,0,0,1,1.122-2.726,3.963,3.963,0,0,1,4.376-.734Z" transform="translate(-1 -5)" fill="#dedede"/>
                  </svg>
            </div>
            <p>By login you are agree to record your activity and your system.</p>
            <button type="submit">Sign In</button>
           <div className="time">
            <p>{cTime}</p>
           </div>
        </form>
    </div>
    </section>
  )
}

export default memo(Auth)