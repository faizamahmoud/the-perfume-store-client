import './App.scss';
import React from 'react';
import Main from './components/Main'
import { getUserToken, setUserToken, clearUserToken } from './utils/authToken'
import { useState, useParams } from 'react'
import { useNavigate } from 'react-router-dom';
import Nav from './components/NavBar'
// import jwt_decode from "jwt-decode";

function App() {


  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // const [isLoggedIn, setLogIn] = useState(false)


  const navigateTo = useNavigate();
  const params = useParams();
  // const {id} = `${params.currentUser._id}`;
  // const {id} = `${params.id}`
  // const url = `https://perfume-store-fm.herokuapp.com/auth/register`


  const registerUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const newUser = await fetch("https://perfume-store-fm.herokuapp.com/auth/register", configs)

      if (!newUser.ok) {
        throw new Error(newUser.statusText)
      }

    } catch (err) {
      console.log("check registration inputs: ", err)

      clearUserToken();
      setIsAuthenticated(false);
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

      const response = await fetch(`https://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);
      //! logs in when password is wrong

      if (!response.ok) {
        throw new Error(response.statusText)
      } else {
        const loginJson = await response.json()
        setUserToken(loginJson.token)
        setCurrentUser(loginJson.currentUser)
        setIsAuthenticated(loginJson.isLoggedIn)
        return (loginJson)
      }

    } catch (err) {
      // clearUserToken()
      setIsAuthenticated(false)
      console.log('not authenticated')
      navigateTo('/login')
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
          Authorization: `bearer ${getUserToken()}`,
          "Content-Type": "application/json",
        },
      };

      // current user id check

      const response = await fetch(`https://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);
      
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
      const response = await fetch(`https://perfume-store-fm.herokuapp.com/profile/${params.id}`, configs);
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
      <Nav login={login} logout={logout}/>
      <Main auth={isAuthenticated} signup={registerUser} login={login} logout={logout} deleteProfile={deleteUser} updateProfile={updateUser} user={currentUser} />
    </div>
  )
}




export default App;
