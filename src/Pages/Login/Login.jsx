import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import './index.css'
import { useNavigate, useParams } from "react-router-dom";


export default function Login({ handleLogin }) {
  const navigate = useNavigate();
  const { id } = useParams;
  
  const [login, setLoggedIn] = useState({ 
    username: "", 
    password: "" 
  });
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // console.log(`loggedIn: ${loggedIn}`)
      const response = await handleLogin(login)
      console.log(response)
      // console.log('result: ', result)
      // console.log(`id: ${id}`)
      // navigate(`/profile/${response._id}`)
      // navigate('/', {replace: true})
    } catch (err) {
      console.log(err)
      navigate('/login')
    }
  }


  const handleChange = async (e) => {
    setLoggedIn({
      ...login, 
      [e.target.name]: e.target.value 
    });
  }



  return (
    <div className="Login">

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={setLoggedIn.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={setLoggedIn.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>


        <button className="button-container" type="submit" style={{ backgroundColor: "#532200", color: "white", borderRadius: "10px solid" }}> login</button>
      </Form>
    </div>
  );
}




