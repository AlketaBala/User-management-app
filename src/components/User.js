import './user.css' //Importing the CSS file for styling
import React, {useState, useEffect} from 'react' //Importing React
const User = ({id, email, name, company}) => {


    return ( //User name, email, and company name and button  for navigation to user details
        <div className='user-card'>
         <h3>{name}</h3>
         <p><strong>{email}</strong></p>
         <p><strong>{company}</strong></p>
         
        </div>
    )
}
export default User