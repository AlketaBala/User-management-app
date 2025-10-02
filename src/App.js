import React, { useEffect, useState } from 'react'  //Importing React hooks
import './App.css' 
import User from './components/User' //Importing the User component to use here
import logo from './logo.svg'


const App = () => { //Create the state variable users to store the list that is fetched from the API

   const [users, setUsers] = useState([]);
   const [input, setInput] =useState(''); // Here can be stored the text entered in search bar
   

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

   const FilterUsers = users.filter((user) => //Here is the filter where we can filter the users based on search input
    user.name.toLowerCase().includes(input.toLowerCase()) || //by name
   user.email.toLowerCase().includes(input.toLowerCase()) // or by email
   );

   return (
     <div className="App">
     <h1>User Management App</h1>
     <div className="Search-Bar">
     <input onChange={e=>setInput(e.target.value)} type ="text" placeholder="Search" className="search"/>
     </div>

     <div className="output"> 
      {users.map(item=>(
        <p>{item.name}</p>
      ))}
     </div>

     <div>
      {
       FilterUsers.map((user) => ( // Here is the display of users that we search for
        <User id={user.id} key={user.id} name= {user.name} email={user.email} company={user.company.name} /> // users id, name, email and company name
       ))
      }
     </div>
    </div>
   )


}

export default App;
