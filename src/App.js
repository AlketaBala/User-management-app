import React, { useEffect, useState } from 'react'  //Importing React hooks
import './App.css' 
import User from './components/User' //Importing the User component to use here
import logo from './logo.svg';

const App = () => { //Create the state variable users to store the list that is fetched from the API

   const [users, setUsers] = useState([]);
      useEffect(() => { 
      fetchData();
   },[])

   const fetchData = async () => { // using fetchData function to fetch user Data from the API and saving it in users State 
    await fetch('https://jsonplaceholder.typicode.com/users')
    .then ((res) => res.json())
    .then ((data) => setUsers(data))
    .catch((err) => {
      console.log(err);
    })
   }
   console.log(users)
   return (
      <div className="App">
     <h1>User Management App</h1>
     <div>
      {
       users.map((user) => (
        <User id={user.id} key={user.id} name= {user.name} email={user.email} company={user.company.name} /> // users id, name, email and company name

       ))
      }
     </div>
    </div>
   )


}

export default App;
