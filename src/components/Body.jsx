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
      const res= await axios.get(BASE_URL + "/profile/view",{withCredentials:true})
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
    <div className="flex h-screen flex-col overflow-hidden">
    <Header />
    <main className=" flex-1 overflow-hidden">
     <Outlet/>
     </main>
     <Footer />
    </div>
  )
}

export default Body