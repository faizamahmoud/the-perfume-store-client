import { Route, Routes, useParams } from "react-router-dom";
import Perfumes from "../pages/Perfumes"
import Product from "../pages/Product"
import Register from "../pages/Register"
import Login from "../pages/Login";
  


const Main = (props) => {

    
    


    return (
        <main>
            <Routes>
                <Route path="/" element={<Perfumes/>} />
                <Route path="/:id" element={<Product/>}/> 
                <Route path="/register" element={<Register signUp={props.signup} />} />
                <Route path="/login" element={<Login  loggedIn={props.login} />  } />
            </Routes>
        </main>
    )
}

export default Main;