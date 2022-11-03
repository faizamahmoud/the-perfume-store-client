import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './index.css';

export default function Product() {

    const [perfume, setPerfume] = useState({})

    const params = useParams();


    useEffect(() => {

        fetch(`https://perfume-store-fm.herokuapp.com/inventory/${params.id}`)
            .then((res) => res.json())
            .then((data) => setPerfume(data))
            .catch(console.log)
    }, []);


    if (!perfume) {
        return <p>Loading Perfume details ...</p>
    }
    // console.log(perfume)
    return (
        <section className="product-container" >
            <>
                <div className="product-container-inner">
                    <div className="left">
                        <img src={perfume.image} alt={perfume.name} /></div>
                    <div className="right">
                        <h3><strong>{perfume.name}</strong></h3>
                        <p>{perfume.brand}</p>
                        <p><i>{perfume.description}</i></p>
                        <h8>Top Notes: {perfume["top notes"]}</h8><br />
                        <h8>Middle Notes: {perfume["middle notes"]}</h8><br />
                        <h8>Base Notes: {perfume["base notes"]}</h8><br />
                        <div><span className="material-symbols-outlined">
                            heart_plus
                        </span></div></div>
                </div>
            </>
        </section>
    )
}






