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
  const params = useParams();

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

  // const login = async (data) => {
//     try {
//       const configs = {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: {
//           "Content-Type": "application/json",
//           // "Authorization": `bearer ${getUserToken()}`
//         },
//       }
//       const fetchData = await fetch('http://perfume-store-fm.herokuapp.com/auth/login', configs);
      
// // console.log(fetchData.ok)
//       if (!fetchData.ok) {
//         throw new Error(fetchData.statusText)
//       } else {
//         const loginJson = await fetchData.json()
//         setUserToken(loginJson.token)
//         setCurrentUser(loginJson.currentUser)
//         setIsAuthenticated(loginJson.isLoggedIn)
//       }
//     } catch (err) {
//       console.log('not authenticated', err)
//     }
//   // }



  const login = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    
      // const fetchData = await fetch('http://perfume-store-fm.herokuapp.com/auth/login', configs);
      // const fetchData = await fetch('http://localhost:4000.com/auth/login', configs);
      
      const myUser = await fetchData.json();

      console.log(myUser);

      // setUserToken(myUser.token);
      // setCurrentUser(myUser.currentUser);
      // setIsAuthenticated(myUser.loggedIn);

      return myUser;
    } catch (err) {
      console.log('not authenticated', err)
    }
  }

  const logout = () => {
    clearUserToken();
    setUserToken(null);
    setIsAuthenticated(false);
  };

  const updateUser = async () => {
    try {
      const configs = {
        method: "PUT",
        headers: {
          Authorization: `bearer ${getUserToken()}`, //!B
          "Content-Type": "application/json",
        },
      };

      // current user id check

      const response = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);

      const updateProfile = await response.json();
      console.log(updateProfile)
    } catch (err) {
      console.log(err)
    }
  }

  const deleteUser = async () => {
    try {
      const configs = {
        method: "DELETE",
        headers: {
          Authorization: `bearer ${getUserToken()}`
        },
      };
      const response = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);
      const deleteProfile = await response.json()
      console.log(deleteProfile)
      logout();

      navigateTo('/');
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="App">
      {/* <Header user={currentUser}/> */}
      <Nav login={login} logout={logout} />
      <Main auth={isAuthenticated} signup={registerUser} login={login} deleteProfile={deleteUser} updateProfile={updateUser} user={currentUser} />
    </div>
  )
}




export default App;
