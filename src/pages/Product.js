import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'


export default function Product() {

    const [perfume, setPerfume] = useState({}) 

    const params = useParams();
    

    useEffect(() => {
        
        fetch(`https://perfume-store-fm.herokuapp.com/inventory/${params.id}`)
            .then((res) => res.json())
            .then((data) => setPerfume(data))

            .catch(console.log)
    }, []);

    // console.log(perfume)

    if (!perfume) {
        return <p>Loading Perfume details ...</p>
    }

    return (
        <section className="product-container" >
            <>
<div className="product-container-inner">
                <h3><strong>{perfume.name}</strong></h3>
                <img src={perfume.image} alt = {perfume.name} />
                <p>{perfume.brand}</p>
                <p>{perfume.description}</p>
                <small>{perfume.topnotes}</small>
                </div>
            </>
        </section>
    )
}






