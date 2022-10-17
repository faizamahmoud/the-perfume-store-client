import './App.scss';
import React from 'react';
import Main from './components/Main'
// import { getUserToken, setUserToken, clearUserToken } from './utils/authToken'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Nav from './components/NavBar'
// import jwt_decode from "jwt-decode";
//! logs in when password is wrong
function App() {


  const navigateTo = useNavigate();
  const {id} = useParams();

  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const thisThrows = async () => {
    throw new Error("Thrown from thisThrows()");
  }
  // Local storage can only save strings, so storing objects requires that they be converted into strings using JSON.stringify before 
  // storing them. 
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

  // const logout = () => {
  //   // clearUserToken();
  //   // setUserToken(null);
  //   // setIsAuthenticated(false);
  // };

  // const updateUser = async () => {
  //   try {
  //     const configs = {
  //       method: "PUT",
  //       headers: {"Content-Type": "application/json"}
  //     };

  //     // current user id check

  //     const rez = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);

  //     const updateProfile = await rez.json();
  //     console.log(updateProfile)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }


  return (
    <div className="App">
      {/* <Header user={currentUser}/> */}
      <Nav login={login}  />
      <Main  signup={registerUser} login={login}  />
    </div>
  )
}

// logout={logout}
// updateProfile={updateUser} 
// auth={isAuthenticated}

export default App;
