


const UserCard = ({user}) => {
     const {firstName,lastName,photoURL,age,gender,about}=user
  return (    
        <div className="card card-compact bg-base-300 w-96 shadow-xl">
  <figure>
    <img
      src={photoURL}
      alt="Shoes" />
  </figure>
  <div className="card-body mt-2">
    <h2 className="card-title">{firstName} {lastName}</h2>
    {/* {age && gender && (<p>{age} years old {gender}</p>)} */}
     <div className="flex gap-2">
      {age!=null && <span>{age}</span>}
      {gender && <span>{gender}</span>}
     </div>
    <p>{about}</p>
    <div className="card-actions  justify-around">
        <button className="btn btn-primary">ignore</button>
      <button className="btn btn-secondary">interested</button>
    </div>
  </div>
</div>    
  )}

export default UserCard