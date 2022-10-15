import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import {clearUserToken} from '../utils/authToken'

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
        <section className="container" >
            <>

                <h3>{perfume.name}</h3>
                <img src={perfume.image} alt = {perfume.name}/>
                <p>{perfume.brand}</p>
                <p>{perfume.description}</p>
            </>
        </section>
    )
}






