import { Outlet, useNavigate } from "react-router-dom"
import { BASE_URL } from "../utils/constants"
import axios from "axios"
import {useEffect} from "react"
import { useDispatch } from "react-redux"
import { addUser } from "../utils/userSlice"
import Header from "./Header"
import Footer from "./Footer"


const Body = () => {
  const dispatch=useDispatch()
   const navigate=useNavigate()

  const fetchUser=async()=>{
    try{
      console.log("fetching user")
      const res= await axios.get(BASE_URL + "/profile/view",{withCredentials:true})
      console.log(res.data)
      dispatch(addUser(res.data))
    
    }
    catch(err)
    {     
      if(err.status===401)
        {
          navigate('/login')
        }     
      console.log(err)
    }
  }

  useEffect(()=>{
    fetchUser()
  },[])
  
  return (    
    <div className="flex min-h-screen flex-col">
    <Header />
    <main className="min-h-[500px] flex-1">      
     <Outlet/>
     </main>
     <Footer />
    </div>
  )
}

export default Body