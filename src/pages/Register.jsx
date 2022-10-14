import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


const RegisterForm = ({ signUp}) => {
    const initialState = { username: "", password: "" }
    const [unregistered, setRegister] = useState(initialState)
    
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const createdUserToken = await signUp(unregistered)

        if (createdUserToken) {
            navigate("/login")
            // loggedIn
        } else {
            navigate("/")
        }
        setRegister(initialState);
    };

    const handleChange = (e) => {
        setRegister({ ...unregistered, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="username">Name: </label>
                <input
                    id="name"
                    name="name"
                    value={unregistered.name}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="username">email: </label>
                <input
                    id="email"
                    name="email"
                    value={unregistered.email}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="username">username: </label>
                <input
                    id="username"
                    name="username"
                    value={unregistered.username}
                    onChange={handleChange}
                />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    id="password"
                    name="password"
                    value={unregistered.password}
                    onChange={handleChange}
                />
                <br />
                <br />
                <input type="submit" value="Sign Up" />
            </form>
        </>
    );
};

export default RegisterForm