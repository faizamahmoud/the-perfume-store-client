import { Route, Routes} from "react-router-dom";
import Perfumes from "../Pages/PerfumeList/Perfumes"
import Product from "../Pages/Detail/Product"
import Register from "../Pages/Register/Register"
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Home from "../Pages/Home/Home"

const Main = (props) => {

    

    return (
        <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/perfumes" element={<Perfumes/>} />
                <Route path="/perfumes/:id" element={<Product/>}/> 
                <Route path="/register" element={<Register signUp={props.signup} />} />
                <Route path="/login" element={<Login  loggedIn={props.login} />  } />
                <Route path="/profile/:id" element={<Profile />  } />
                
            </Routes>
        </main>
    )
}
// deleteProfile={props.deleteUser} updateProfile = {props.updateUser} />  
export default Main;