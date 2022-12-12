
import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import { setUserToken, clearUserToken } from './storage/authToken'
import Nav from './Components/Nav/NavBar'
import Main from '../src/Components/Main'
import Carousel from './Components/Carousel/Carousel';



function App() {


  // const URL = 'http://localhost:4000';
  const URL = 'https://perfume-store-fm.herokuapp.com';

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
        <Carousel
        show={2}
        infiniteLoop
        withIndicator
      >
      <h2 data-testid="carousel-item-1">Item 1</h2>
      <h2 data-testid="carousel-item-2">Item 2</h2>
      <h2 data-testid="carousel-item-3">Item 3</h2>
      <h2 data-testid="carousel-item-1">Item 1</h2>
      <h2 data-testid="carousel-item-2">Item 2</h2>
      <h2 data-testid="carousel-item-3">Item 3</h2>
      <h2 data-testid="carousel-item-1">Item 1</h2>
      <h2 data-testid="carousel-item-2">Item 2</h2>
      <h2 data-testid="carousel-item-3">Item 3</h2>
      <h2 data-testid="carousel-item-1">Item 1</h2>
      <h2 data-testid="carousel-item-2">Item 2</h2>
      <h2 data-testid="carousel-item-3">Item 3</h2>
      <h2 data-testid="carousel-item-1">Item 1</h2>
      <h2 data-testid="carousel-item-2">Item 2</h2>
      <h2 data-testid="carousel-item-3">Item 3</h2>
      </Carousel>
    
      {/* pass login which returns the user object */}
      {/* <Nav login={login} authenticated={isAuthenticated} currUser={currentUser}/>
      <Main signup={registerUser} login={login} authenticated={isAuthenticated} currUser={currentUser} /> */}
    </div>
  )
}

export default App;
