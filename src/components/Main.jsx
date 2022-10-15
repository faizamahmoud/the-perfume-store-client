import { Route, Routes, useParams } from "react-router-dom";
import Perfumes from "../pages/Perfumes"
import Product from "../pages/Product"
import Register from "../pages/Register"
import Login from "../pages/Login";
import Profile from "../pages/Profile";


const Main = (props) => {

    
    


    return (
        <main>
            <Routes>
                <Route path="/" element={<Perfumes/>} />
                <Route path="/:id" element={<Product/>}/> 
                <Route path="/register" element={<Register signUp={props.signup} />} />
                <Route path="/login" element={<Login  loggedIn={props.login} />  } />
                <Route path="/profile" element={<Profile  deleteProfile={props.deleteUser} updateProfile = {props.updateUser} />  } />
                
            </Routes>
        </main>
    )
}

export default Main;