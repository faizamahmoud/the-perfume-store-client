
import React from 'react';
import Main from './Components/Main'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {setUserToken, clearUserToken } from './storage/authToken'
import Nav from './Components/Nav/NavBar'


function App() {

  const navigateTo = useNavigate();
  const { id } = useParams();

  // success response will update setCurrentUser() which stores information about the current user
  const [currentUser, setCurrentUser] = useState({})

  // setIsAuthenticated() stores a boolean of the response's isLoggedIn.
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const thisThrows = async () => {
    throw new Error("Thrown from thisThrows()");
  }

  // make post request to back
  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      // save response in newUser
      const newUser = await fetch('http://perfume-store-fm.herokuapp.com/auth/register', configs)

      // a promise that resolves to a JS obj
      const parsedUser = await newUser.json()


      if (newUser.ok) {
        navigateTo('/login')
        // sets local storage

      } else {
        thisThrows();
      }
return parsedUser;
    } catch (err) {
      clearUserToken();

    }
  }


  const login = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const fetchData = await fetch(`https://perfume-store-fm.herokuapp.com/auth/login/${id}`, configs);
      const myUser = await fetchData.json();


      setUserToken(myUser.token)
      // put the returned user object in state
      setCurrentUser(myUser.currentUser)
      // adds a boolean cast of the responses isLoggedIn prop
      setIsAuthenticated(myUser.loggedIn)
      return (myUser)
    } catch (err) {
      console.log('not authenticated', err)
      clearUserToken()
      setIsAuthenticated(false)
    }
  }



  return (
    <div className="App">
      <Nav login={login} />
      <Main signup={registerUser} login={login} />
    </div>
  )
}



export default App;
