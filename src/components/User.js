import './user.css' //Importing the CSS file for styling
import React, {useState, useEffect} from 'react' //Importing React
const User = ({id, email, name, company}) => {


    return ( //User name, email, and company name and button  for navigation to user details
        <div className='list'>
         <span>{name}</span> 
         <span>{email}</span>
         <span>{company}</span>
         <span>
            <button>Click here to see more details</button> 
         </span>
        
        </div>
    )
}
export default User