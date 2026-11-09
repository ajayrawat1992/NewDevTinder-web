
import  { useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'
import { BASE_URL } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addUser } from '../utils/userSlice'


const EditProfile = ({user}) => {    
    const [firstName,setFirstName]=useState(user.firstName)
    const [lastName,setLastName]=useState(user.lastName)
    const [age,setAge]=useState(user.age)
    const [gender,setGender]=useState(user.gender)
    const [about,setAbout]=useState(user.about)
    const [photoURL,setPhotoURL]=useState(user.photoURL)
    const [showToast,setShowToast]=useState(false)
    const [error,setError]=useState("")
    const dispatch=useDispatch()

    const handleSaveProfile=async()=>{
      setError("")  //clear previous error message
        try{
             const user=await axios.patch(BASE_URL+"/profile/edit",{firstName,lastName,age,gender,about,photoURL},{withCredentials:true})
                //console.log(user)
            dispatch(addUser(user?.data?.user))
            setShowToast(true)
            
            setTimeout(()=>
            {
                setShowToast(false)
            },2000)

        }
        catch(err)
        {
           setError(err.response?.data || "An error occurred while saving the profile.")
        }
    }

  return (
    <>
    <div className="flex h-full min-h-0 items-center justify-center gap-4 overflow-hidden p-2">
    <div className="card max-h-full w-full max-w-md flex-1 overflow-hidden bg-base-300 shadow-xl">
  <div className="card-body gap-1 p-3 sm:p-4">
    <h2 className="card-title mb-1 justify-center text-xl">Profile</h2>

    <label className="form-control w-full ">
  <div className="label py-0.5">
    <span className="label-text">First Name</span>
  </div>
  <input type="text"
  value={firstName}
  onChange={(e)=>setFirstName(e.target.value)}
   placeholder=" Enter FirstName" 
   className="input input-bordered input-sm w-full p-2" />  
</label>

<label className="form-control w-full">
  <div className="label py-0.5">
    <span className="label-text">Last Name</span>
  </div>
  <input type="text"
  value={lastName}
  onChange={(e)=>setLastName(e.target.value)}
   placeholder="Enter LastName" 
   className="input input-bordered input-sm w-full p-2" />  
</label>

<label className="form-control w-full">
  <div className="label py-0.5">
    <span className="label-text">Gender</span>
  </div>
  <select
  value={gender || ""}
  onChange={(e) => setGender(e.target.value)}
  className="select select-bordered select-sm w-full">

  <option value="" disabled>Select gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
  <option value="others">Others</option>
</select>
</label>

<label className="form-control w-full">
  <div className="label py-0.5">
    <span className="label-text">Age</span>
  </div>
  <input type="text"
  value={age}
  onChange={(e)=>setAge(e.target.value)}
   placeholder="Enter Age" 
   className="input input-bordered input-sm w-full p-2" />  
</label>


<label className="form-control w-full">
  <div className="label py-0.5">
    <span className="label-text">Photo URL</span>
  </div>
  <input type="text"
  value={photoURL}
  onChange={(e)=>setPhotoURL(e.target.value)}
   placeholder="Enter Photo URL" 
   className="input input-bordered input-sm w-full p-2" />  
</label>


<label className="form-control w-full">
  <div className="label py-0.5">
    <span className="label-text">About</span>
  </div>
  <textarea 
  value={about}
  onChange={(e)=>setAbout(e.target.value)}
   placeholder="Enter About" 
   className="input input-bordered input-sm w-full p-2" ></textarea>  
</label>


     <p className="text-sm text-red-500">{error}</p>
    <div className="card-actions justify-center pt-2">
      <button className="rounded bg-cyan-700 px-4 py-2" onClick={handleSaveProfile}>Save Profile</button>
    </div>
  </div>
</div>
      <div className="w-96 shrink-0">
        <UserCard user={{ firstName, lastName, age, gender, about, photoURL }} />
      </div>
    </div>

   { showToast && <div className="toast toast-top toast-center">
  <div className="alert alert-success p-3">
    <span>profile saved successfully.</span>
  </div>
</div>}
    </>
  )
}

export default EditProfile