import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
// import { Link } from 'react-router-dom';
import "../styles/Login.css";
import { useNavigate } from "react-router-dom";

export default function Login({loggedIn}) {
  const navigate = useNavigate();
  const [login , setLoggedIn] = useState({ username: "", password: "" });

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      const rez = await loggedIn(login)

      console.log('res',rez)
      // console.log(${id})
      navigate(`/profile/${rez.success.id}`)
    }catch(err){
      console.log(err)
      navigate('/login')
    }
  }


  const handleChange = async (e) => {
    setLoggedIn({ ...login, [e.target.name]: e.target.value });
  }

  //! route to sign up page below

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
        
      

<a href={`${login._id}`} target="_self">
  <Button type="submit"> Login </Button>
</a>
      </Form>
    </div>
  );
}




