import React from 'react'
import PunchInOut from '../component/PunchInOut'
import axios from 'axios'

const Employee = () => {

  return (
    <>
    {/* <button onClick={()=>{localStorage.clear("auth"); localStorage.clear("user_type"); localStorage.clear("user_name"); window.location.reload(); }} >Logout</button> */}
    <PunchInOut/>
    </>
  )
}

export default Employee