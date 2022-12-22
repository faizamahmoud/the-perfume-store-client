
import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { setUserToken, clearUserToken } from './storage/authToken'
import Nav from './Components/Nav/NavBar'
import Main from '../src/Components/Main'
import SearchBar from './Components/SearchBar/SearchBar';
import Carousel from './Components/Carousel/Carousel';



function App() {

  const URL = 'http://localhost:4000.com';
  // const URL = 'https://perfume-store-fm.herokuapp.com';

  //* create state for users with accounts and authenticating login information
  const [currentUser, setCurrentUser] = useState({}) // removed {} // success response will update setCurrentUser() which stores information about the current user
  const [isAuthenticated, setIsAuthenticated] = useState(false) // setIsAuthenticated() stores a boolean of the response's isLoggedIn.


  const registerUser = async (userInfo) => {
    try {
      const requestHeader = {
        headers: { "Content-Type": "application/json" }
      }

      const response = await axios.post(`${URL}/auth/register/`, JSON.stringify(userInfo), requestHeader);
      const data = response.data;

      setUserToken(data.token) // storing token in local storage
      setCurrentUser(data.currentUser) // updating state
      setIsAuthenticated(data.isSignedUp) //updating state to true
      return response
    }catch (err) {
      console.log(err)
      clearUserToken();
      // setIsAuthenticated(false);
      
    }
  }

  const login = async (userInfo) => {
    // console.log(userInfo)
    try {
      const requestHeader = {
        headers: { "Content-Type": "application/json" }
      }

      const response = await axios.post(`${URL}/auth/login/`, JSON.stringify(userInfo), requestHeader);
      const data = response.data;
      
      setUserToken(data.token);
      setCurrentUser(data.username); // put the returned user object in state
      setIsAuthenticated(data.isLoggedIn); // adds a boolean cast of the responses isLoggedIn prop
      // console.log(data.isLoggedIn)
      // console.log('after setters:', data);
      return data;

    } catch (err) {
      console.log(err)
      clearUserToken()
      setIsAuthenticated(false)
    }
  }


  return (
    <div className="App">
      {/* pass login which returns the user object */}
      <Nav login={login} authenticated={isAuthenticated} currUser={currentUser}/>
      <SearchBar/>
      <Main signup={registerUser} login={login} authenticated={isAuthenticated} currUser={currentUser} />
    </div>
  )
}

export default App;
