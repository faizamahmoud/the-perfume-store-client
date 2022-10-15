import './App.scss';
import React from 'react';
import Main from './components/Main'
import { getUserToken, setUserToken, clearUserToken } from './utils/authToken'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function App() {


  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const navigateTo = useNavigate();
  const params= useParams();
  const {id} = `${params.currentUser._id}`;
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
      console.log(newUser)
      // if (!newUser.ok) {
      //   throw new Error(newUser.statusText)
      // } else {
      //   const parsedUser = await newUser.json()
      //   setUserToken(parsedUser.token)
      //   setCurrentUser(parsedUser.currentUser)
      //   setIsAuthenticated(parsedUser.loggedIn)
      //   return parsedUser
      // }
      console.log('new user created: ', newUser)


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
      const rez = await fetch("https://perfume-store-fm.herokuapp.com/auth/login", configs)
      const userJson = await rez.json()

      setUserToken(userJson.token)
      console.log('setUserTOken: ', setUserToken)
      setCurrentUser(userJson.currentUser)
      console.log('setCurrentUser: ', setCurrentUser)
      setIsAuthenticated(userJson.isLoggedIn)
      console.log('setIsAuthenticated: ', setIsAuthenticated)


    } catch (err) {
      // clearUserToken()
      setIsAuthenticated(false)
      console.log('not authenticated')
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

      const response = await fetch('https://perfume-store-fm.herokuapp.com/profile/' + id, configs);
      console.log(response)
      const updateProfile = await response.json();

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
      const response = await fetch(
        'https://perfume-store-fm.herokuapp.com/profile/' + id, configs
      )
      const deleteProfile = await response.json()
      logout();

      navigateTo('/');
    } catch (error) {
      console.log(error)
    }
  }





  return (
    <div className="App">
      {/* <Header user={currentUser}/> */}
      <Main auth={isAuthenticated} signup={registerUser} login={login} deleteProfile={deleteUser} updateProfile={updateUser} user={currentUser} />
    </div>
  )
}




export default App;
