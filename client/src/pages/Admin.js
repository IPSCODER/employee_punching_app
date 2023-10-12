import React from 'react'

const Admin = () => {
  return (
    <div>
      <button onClick={()=>{localStorage.clear("auth"); localStorage.clear("user_type"); localStorage.clear("user_name"); window.location.reload(); }} >Logout</button>
        <h1>Admin</h1>
    </div>
  )
}

export default Admin