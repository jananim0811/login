import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

function App(){
  const navigate = useNavigate()
  const[user,setuser]=useState("")
  const[pass,setpass]=useState("")

function handleuser(evt)
{
setuser(evt.target.value)
}

function handlepass(evt)
{
setpass(evt.target.value)
}
 
function Check(){
      if (user === "") {
        alert("Email is required")
        return
    }

    if (!user.includes("@")) {
        alert("Enter a valid email")
        return
    }

    if (pass === "") {
        alert("Password is required")
        return
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters")
        return
    }
    var logindetails = axios.post(
        "http://localhost:3000/login",
        {
            username: user,
            password: pass
        }
    )
    logindetails.then(function(data){
    if(data.data ===true)
    {
      navigate("/success")
    }
    else{
       navigate("/fail")
    }
  })
   .catch(function(error) {
            console.log(error)
            alert("Unable to connect to server")
        })
}

  return(
     <div>
      <input onChange={handleuser} name="username" placeholder="username"></input>
      <input onChange={handlepass} type="password" placeholder="password"></input>
      <button onClick={Check}>Login</button>
    </div>
  )
}
export default App