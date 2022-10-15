import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Form from "react-bootstrap/Form";
import "../styles/Register.css";

const RegisterForm = ({ signUp}) => {
    
    
    const [unregistered, setRegister] = useState({ name: "", username: "", email: "", password: "" } )
    // const [successful, setSuccessful] = useState(false);
    
    
    const navigate = useNavigate()

    //*handles form submission and trigger a re-render form
    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signUp(unregistered)

        if (!createdUserToken) {
            navigate("/login")
            // loggedIn
        } else {
            navigate("/")
        }
        setRegister(unregistered);
    };

     //*function will handle our components state to control the form
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
            type="name"
            value={unregistered.name}
            onChange={handleChange}
          />
          </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocus
            type="username"
            value={unregistered.username}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="email">
          <Form.Label>email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={unregistered.email}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={unregistered.password}
            onChange={handleChange}
            autoComplete="off"
          />
        </Form.Group>
        {/* <button type="submit">
          Login
        </button> */}
        <input type="submit" value="Sign Up" />
      </Form>
    </div>
  );
};

export default RegisterForm

