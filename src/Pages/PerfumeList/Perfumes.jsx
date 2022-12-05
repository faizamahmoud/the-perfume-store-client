
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./index.css"


function Perfumes() {
    
    const url = 'http://localhost:4000/inventory'

    const [data, setData] = useState([])


    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setData(json)
            })
            .catch(console.error)
    }, []);

        return (
            <section className="perfumes-container">
        {
            data.map((perfume, idx) => {
                perfume.key = idx;
                
                return (

                    <div className="perfumes-card" key={idx}>

                        <img className="perfumes-img" src={perfume.image} alt={perfume.name} />
                        <span  style={{textAlign:"center", padding: "10px 20px"}}>
                        <Link to={`${perfume._id}`}>{perfume.name}</Link> ${perfume.price}
                        </span>


                    </div>

                )
                
            })
        }
    </section>
        )


}

export default Perfumes;
