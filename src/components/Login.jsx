import { useState } from "react"
import axios  from "axios"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import { useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"


const Login = () => {

  const [emailid,setEmailId] = useState("ankush@gmail.com")
  const [password,setPassword]=useState("Ankush_123")
  const [error,setError]=useState("")
  const navigate=useNavigate()
  const dispatch=useDispatch()


     const handleLogin=async()=>
      {
          try{
            const res= await axios.post(BASE_URL + "/login",{
            emailid,password
          },{withCredentials:true}) 
          dispatch(addUser(res.data))
           navigate('/')
          }
catch(err)
{
  //console.log(err.message)
  setError(err?.response?.data || "Something went wrong")

}
      }  

  return (     
       <div className="card bg-base-300 w-96 shadow-xl m-auto  mt-12 h-[325px] transition hover:scale-105 duration-300 hover:shadow-xl ">
  <div className="card-body flex  flex-col  ">
    <h2 className="card-title my-5 m-auto text-xl ">Login</h2>
    <label className="form-control w-full ">
  <div className="label mb-1">
    <span className="label-text mx-3 ">Emailid</span>    
  </div>
  <input type="text"
  value={emailid}
  onChange={(e)=>setEmailId(e.target.value)}
   placeholder=" Enter Emailid" 
   className="input input-bordered  w-[350px] rounded  p-3 mx-3" />
  
</label>

<label className="form-control w-full mt-3 ">
  <div className="label mb-1">
    <span className="label-text mx-3">Password</span>
  </div>
  <input type="text"
  value={password}
  onChange={(e)=>setPassword(e.target.value)}
   placeholder="Enter Password" 
   className="input input-bordered  w-[350px] rounded  p-3 mx-3" />
  
  
</label>
<p className="text-red-500 ml-3">{error}</p>
    <div className="card-actions justify-center my-3 ">
      <button className=" p-3 w-20 rounded bg-cyan-700" onClick={handleLogin}>login</button>
    </div>
  </div>
</div>
  )
}

export default Login