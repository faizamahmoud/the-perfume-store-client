import React from "react";
import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'


export default function Product() {

    const [perfume, setPerfume] = useState({}) 

    const params = useParams();
    
    const perfumeId = `${params.perfumeId}` 
    // console.log(params)

    useEffect(() => {
        // const url = `http://perfume-store-fm.herokuapp.com/inventory/${params.perfumeId}`
        // const url = `https://my-perfumes-api.herokuapp.com/perfumes/${perfumeId}`
        fetch(`https://my-perfumes-api.herokuapp.com/perfumes/${perfumeId}`)
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
                <p>{perfume.brand}</p>
                <p>{perfume.description}</p>
            </>
        </section>
    )
}






