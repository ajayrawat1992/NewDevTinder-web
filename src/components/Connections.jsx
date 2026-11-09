import axios from "axios"
import { useEffect } from "react"
import { BASE_URL } from "../utils/constants"
import { useDispatch, useSelector } from "react-redux"
import { addConnection } from "../utils/connectionSlice"



const Connections = () => {

         const  dispatch=useDispatch()
         const connections=useSelector((store)=>store.connection)
        

            const fetchConnections=async()=>{
    
                try{ const  res=await axios.get( BASE_URL+ '/user/requests/connections',{withCredentials:true})
                 console.log(res.data.data)
                dispatch(addConnection(res.data.data))}
                catch(err)
                {
                    console.log(err)
                }
            }

     useEffect(()=>
    {
        fetchConnections()
    },[])

    if(!connections || connections.length===0) return <h1>No connections found</h1>

  return (
    <>
      <div className=" text-center my-10">
        <div className="text-2xl">Connections</div>
        {connections.map((connection)=>{
            const {firstName,lastName,photoURL,age,gender,about}=connection
             return(
                <div className="flex w-1/2 m-auto p-4 mt-4 bg-base-300">
                <div>
                    <img  alt="photo" className="w-20 h-20 rounded-full" src={photoURL} />
                </div>
                <div className="text-left ml-3 ">
                    <h2 className="text-xl font-semibold">{firstName +" "+lastName}</h2>
                 {age&& gender&& <p>{age + " " + gender}</p>}
                 <p>{about}</p>
                </div>
                </div>
             )
        })}

      </div>

    </>
  )
}

export default Connections