import React from 'react';
import {Link ,useLocation, useParams} from 'react-router-dom';

const UserDetailsPage =()=> {


    const {id} = useParams();
    const location = useLocation();
    const user= location.state?.user;

if(!user){
    return <p>No user available</p>
}// Here its all the details of the user that will be shown 
// A button that you can click to get back to the homepage
    return (
        <div>
            <h1>User Details Page</h1>
            <p>User ID: {id}</p>
            <p>Name: {user.name}</p>
            <p>Phone: {user.phone}</p>
            <p>Website: {user.website}</p>
            <p>Address: {user.address.street}, {user.address.suite}, {user.address.zipcode},{user.address.city}</p>
           
      
        <Link to="/">
            <button>Back to home</button> 
        </Link>
          </div>
    )
}
export default UserDetailsPage;