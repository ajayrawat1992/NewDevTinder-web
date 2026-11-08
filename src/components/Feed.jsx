import axios from "axios"
import { BASE_URL } from "../utils/constants"
import { addFeed } from "../utils/feedSlice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import UserCard from "./UserCard"

const Feed = () => {
        const dispatch= useDispatch()
        const feed=useSelector((store)=>store.feed)
        //console.log(feed)
  const getFeed=async()=> {
      
  try {
    const user= await axios.get(BASE_URL+"/feed",{withCredentials:true})
    //console.log(user.data)
    dispatch(addFeed(user.data))
    }
catch(err)
{
  console.log(err)
}
        }

        useEffect(()=>
        {
            getFeed()
        },[])

  return  feed && (
    <div className="flex justify-center my-5 h-[500px]">
      <UserCard user={feed[0]} />
    </div>
  )
}

export default Feed