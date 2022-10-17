import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Form from "react-bootstrap/Form";
import "../styles/Register.css";

const RegisterForm = ({ signUp }) => {

  const [unregistered, setRegister] = useState({ name: "", username: "", email: "", password: "" })


  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUser = await signUp(unregistered)

  };

  const handleChange = (e) => {
    setRegister({ ...unregistered, [e.target.name]: e.target.value });
  };


  return (
    <div className="Sign-Up">

      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            autoFocus
            type='text'
            name="name"
            value={unregistered.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type='text'
            name="username"
            value={unregistered.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>email</Form.Label>
          <Form.Control
            autoFocus
            type='text'
            name="email"
            value={unregistered.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='text'
            name="password"
            value={unregistered.password}
            onChange={handleChange}
          />
        </Form.Group>

        <input type="submit" value="Sign Up" />
      </Form>
    </div>
  );
};

export default RegisterForm

