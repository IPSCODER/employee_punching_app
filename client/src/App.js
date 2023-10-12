import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./auth/Auth";
import Admin from "./pages/Admin";
import Employee from "./pages/Employee";
import { useEffect, useState } from "react";
import NotFound from "./pages/NotFound";
import Header from "./component/Header";
import LoginHistory from "./pages/LoginHistory";
import axios from "axios";


function App() {
  const [auth, setAuth] = useState(false);
  const [authPath,setAuthPath] = useState(false)



  const test = async () =>{
    await axios.get("https://node-3pmq.onrender.com").then((data)=> console.log(data))
  }

  



  useEffect(()=>{
    if (localStorage.getItem("user_type") === "employee" && localStorage.getItem("auth") === "true" ) {
      setAuthPath(false)
      setAuth(true)
      // console.log(localStorage.getItem("user_type"),localStorage.getItem("auth"));
    }else if(localStorage.getItem("user_type") === "admin" && localStorage.getItem("auth") === "true" ){
      setAuthPath(true)
      setAuth(true)
      // console.log(localStorage.getItem("user_type"),localStorage.getItem("auth"));
    }else if(!localStorage.getItem("user_type") === "admin" && !localStorage.getItem("auth") === "true" || !localStorage.getItem("user_type") === "employee" && !localStorage.getItem("auth") === "true"  ){
      setAuth(false)
      setAuthPath(false)
      // console.log(localStorage.getItem("user_type"),localStorage.getItem("auth"));
    }

    test()

  },[localStorage.getItem("user_name")])



  return (
    <>
      <BrowserRouter>
      {auth && <Header/>}
        <Routes>
          {localStorage.getItem("user_name") ? (
            <>
              {
                authPath ? (
                  <>
                  <Route path="/" element={<Admin />} />
                  <Route path="*" element={<NotFound />} />
                  </>
                ) : (
                  <>
                  <Route path="/" element={<Employee />} />
                  <Route path="/login-history" element={<LoginHistory />} />
                  <Route path="*" element={<NotFound />} />
                  </>
                )
              }
            </>
          ) : (
            <>
              <Route path="/" element={<Auth setAuth={setAuth} setAuthPath={setAuthPath} />} />
             <Route path="*" element={<NotFound/>} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
