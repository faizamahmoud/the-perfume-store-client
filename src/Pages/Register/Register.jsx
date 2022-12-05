import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Form from "react-bootstrap/Form";
import { FaUser } from 'react-icons/fa'
import './index.css'

const RegisterForm = ({ signUp }) => {

  const navigate = useNavigate();

  const initialState = { name: "", username: "", email: "", password: "" }
  const [formData, setFormData] = useState(initialState)


  const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUser = await signUp(formData)

    if (createdUser) {
      navigate("/login")
    } else {
      navigate("/register")
    }
    setFormData(initialState);
  };

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };


//! if authenticated = false : error message in jsx
  return (
    <>
      <section className='heading'>
        <h1>
          <FaUser /> Register
        </h1>
        <p>Please create an account</p>
      </section>
     
     
      <section className='form'>
        <Form onSubmit={handleSubmit}>
          
          <div className='form-group'>
            <Form.Control
              autoFocus
              type='text'
              className='form-control'
              name="name"
              value={formData.name}
              placeholder='Name'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <Form.Control
              autoFocus
              type='text'
              className='form-control'
              name="username"
              value={formData.username}
              placeholder='Username'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <Form.Control
              autoFocus
              type='text'
              className='form-control'
              name="email"
              value={formData.email}
              placeholder='Email Address'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <Form.Control
              type='text'
              className='form-control'
              name="password"
              value={formData.password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </Form>
      </section>
    </>
  );
};



export default RegisterForm

