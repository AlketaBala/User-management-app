import React, { useEffect, useState } from 'react'  //Importing React hooks
import './App.css' 
import User from './components/User' //Importing the User component to use here
import { Routes, Route, Link } from 'react-router-dom';
import UserDetailsPage from './pages/UserDetailsPage';
import logo from './logo.svg';
import AddUserPage from './pages/addUserPage';
import {useLocation} from 'react-router-dom';


const App = () => { //Create the state variable users to store the list that is fetched from the API

   const [users, setUsers] = useState([]);
   const [input, setInput] =useState(''); // Here can be stored the text entered in search bar
   const location = useLocation();

      useEffect(() => { 
      fetchData();
   },[]);

   useEffect(()=> {
    if(location.state && location.state.newUser){
      setUsers((prevUsers)=>[location.state.newUser, ...prevUsers]);
    }
   },[location.state]);

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
    <Routes>
      <Route path="/" element={
     <div className="App">
     <h1>User Management App</h1>
     <div className="Search-Bar">
     <input onChange={e=>setInput(e.target.value)} type ="text" placeholder="Search" className="search"/>
     </div>
 

     <div>
      {
       FilterUsers.map((user) => ( // Here is the display of users that we search for
        // users id, name, email and company name
        //When clicking a user through this link we can navigate to Details Page about that user
        <Link to={`/user/${user.id}`} key={user.id} state={{user}}>
        <User id={user.id} key={user.id} name= {user.name} email={user.email} company={(user.company && user.company.name)? user.company.name: "N/A"} /> 
       </Link>
       ))
      }
     </div>
      <div>
        <Link to="/addUser">
         <button> Add User </button>
         </Link>
      </div>


    </div>
      }
      />
      <Route path="/addUser" element ={<AddUserPage/>} />
      <Route path="/user/:id" element={<UserDetailsPage/>} />
    </Routes>
    
   )


}

export default App;
