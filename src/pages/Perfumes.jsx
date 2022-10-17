
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import "../styles/Perfumes.css"

// ! need token to add it to user profile
function Perfumes() {
    
    const url = 'http://perfume-store-fm.herokuapp.com/inventory'

    const [data, setData] = useState([])


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                // console.log(json)
                setData(json)
        })
    .catch(console.error)}, []);

    return (
        data.map((perfume, idx, results) => {
            perfume.key = idx;
            return (
                <div className= "perfumes-container">
               
                    <div className="perfumes-card">
                    
                        <img className="perfumes-img" variant="bottom" src={perfume.image}  max-width='100%'/>
                        
                            <Link to={`${perfume._id}`}>{perfume.name}</Link>
                        
                    
                    </div>
                
                </div>
            )
        })
    )
}

export default Perfumes;