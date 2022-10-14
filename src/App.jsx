import './App.scss';
import React from 'react';
import Main from './components/Main'
import { setUserToken, clearUserToken } from './utils/authToken'
import {useState, useEffect} from 'react'

function App() {
 

  const [currentUser, setCurrentUser] = useState({})
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const registerUser = async (data) => {
    try {

      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }

      const newUser = await fetch(
        // "https://perfume-store-fm.herokuapp.com/register",
        'http://localhost:4000/register',
        configs
      )
// console.log(newUser)
if(!newUser.ok){
  throw new Error(newUser.statusText)
}else{
  const parsedUser = await newUser.json()
  setUserToken(parsedUser.token)
  setCurrentUser(parsedUser.currentUser)
  setIsAuthenticated(parsedUser.loggedIn)
  return parsedUser
}
     

      
    } catch (err) {
      console.log(err)
      clearUserToken();
      setIsAuthenticated(false);
    }
  }

  const loginUser = async (data) => {
    try {
      const configs = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
      const response = await fetch(
        // "https://perfume-store-fm.herokuapp.com/login",
        "http://localhost:4000/register",
        configs
      )
      const user = await response.json()
      
      setUserToken(user.token)
  
      setCurrentUser(user.currentUser)
      
      setIsAuthenticated(user.loggedIn)

      return user
    } catch (err) {
      clearUserToken()
      setIsAuthenticated(false)
    }
  }

  return (
    <div className="App">
      {/* <Header user={currentUser}/> */}
      <Main isLoggedIn={isAuthenticated} signup={registerUser} login={loginUser} user={currentUser} />
    </div>
  )
}




export default App;
