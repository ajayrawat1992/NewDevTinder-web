import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Header = () => {

   const user=useSelector((store)=>store.user)

  return (
<div className="navbar bg-base-300 flex justify-between px-8">
  <div className="">
    <Link to="/" className="btn btn-ghost text-xl">devTinder</Link>
  </div>
  {  user && (<div className="flex flex-none items-center gap-2">
    <div className="whitespace-nowrap mr-2">Welcome, {user.firstName}</div>

    <div className="dropdown dropdown-end flex ">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="user-photo"
            src={user.photoURL} />
        </div>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content  z-[1] mt-12  w-30 p-2 ">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>)}
  
</div>

    
  )
}

export default Header