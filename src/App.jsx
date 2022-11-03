
import React from 'react';
import Main from './Components/Main'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from './Components/Nav/NavBar'


function App() {


  const navigateTo = useNavigate();
  const {id} = useParams();

  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const thisThrows = async () => {
    throw new Error("Thrown from thisThrows()");
  }
  
  
  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      // Fetch sends the Request and returns a promise, which is resolved to the Response object when the request completes
      const newUser = await fetch('http://perfume-store-fm.herokuapp.com/auth/register', configs)
      // returns a promise 
      const parsedUser = await newUser.json()
      console.log(parsedUser)
      
      if (newUser.ok) {
        navigateTo('/login')
      } else {
        thisThrows();
      }

    } catch (err) {
      console.log("Not a new user: ", err)
    }
  }

  const login = async (data) => {
    try {
      const configs = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    
      const fetchData = await fetch(`https://perfume-store-fm.herokuapp.com/auth/login/${id}`, configs);
      
      const myUser = await fetchData.json();
    console.log(myUser)
      // console.log(myUser.ok);
    setCurrentUser(myUser)
    return(myUser)
    } catch (err) {
      console.log('not authenticated', err)
    }
  }



  return (
    <div className="App">
      <Nav login={login}  />
      <Main  signup={registerUser} login={login}  />
    </div>
  )
}



export default App;
