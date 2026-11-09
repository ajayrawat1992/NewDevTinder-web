import axios from 'axios'
import { useEffect } from 'react'
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addRequest } from '../utils/requestSlice'


const Requests = () => {
    const dispatch=useDispatch()
    const requests=useSelector((store)=>store.request)

     const fetchRequests=async()=>
     {
        try{
            const res=await axios.get(BASE_URL+"/user/requests/receiver",{withCredentials:true})
            //console.log(res.data.data)
            dispatch(addRequest(res?.data?.data))
            }
             catch(err)
             {
                console.log(err)
             }

     }
     useEffect(()=>
    {
    fetchRequests()
    },[])

     if(!requests) return
     if(requests.length==0)return <h1>No requests found..</h1>

  return (
    <>
      <div className=" text-center my-10">
        <div className="text-2xl">Connections</div>
        {requests.map((request)=>{
            const {_id,firstName,lastName,photoURL,age,gender,about}=request.senderId
             return(
                <div key={_id} 
                className="flex justify-between items-center   w-[40%] m-auto p-4 mt-4 bg-base-300">
                <div>
                    <img  alt="photo" className="w-20 h-20 rounded-full" src={photoURL} />
                </div>
                <div className="text-left ml-3 ">
                    <h2 className="text-xl font-semibold">{firstName +" "+lastName}</h2>
                 {age&& gender&& <p>{age + " " + gender}</p>}
                 <p>{about}</p>
                </div>
                <div className=''>
                    <button className='btn btn-primary mx-4 p-2 bg-red-500'>Reject</button>
                    <button className='btn btn-secondary mx-4 p-2 bg-blue-400'>Accept</button>
                </div>
                </div>
             )
        })}

      </div>

    </>
  )
}

export default Requests