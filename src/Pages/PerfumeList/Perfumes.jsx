
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import "./index.css"


function Perfumes() {
    const URL = 'http://localhost:4000/inventory';
    // const URL = 'https://perfume-store-fm.herokuapp.com/inventory';

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((json) => {

                setData(json)
                // throw new Error('from useEffect fetch');
            })
            .catch(console.error)
    }, []);

    return (
        <section className="perfume-container">
              <main className="grid">
            {
                data.map((perfume, idx) => {
                    perfume.key = idx;

                    return (
                        <article key={idx}>
                            
                            <img className="perfumes-img" src={perfume.ImageUrl} alt={perfume.Name} />
                        <div className='text'>
                            <h6><Link to={`${perfume._id}`}>{perfume.Name}</Link></h6>
                            
                            <p>{perfume.Brand}</p>
                            </div>
                        </article>
                    )

                })
            }
            </main>
        </section>
    )


}

export default Perfumes;
