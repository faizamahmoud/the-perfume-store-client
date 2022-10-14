
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBCardTitle,
//     MDBIcon,
//   } from "mdb-react-ui-kit";

function Perfumes() {

    const url = 'http://perfume-store-fm.herokuapp.com/inventory'

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const dataa = await response.json();

            return dataa;
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        fetchData()
            .then(setData)
            .catch(error => {
                console.warn(JSON.stringify(error, null, 2));
            });
    }, []);



    return (

        <section className="container" >
            <div className="card">
                <div className="card-image">

                    {data.map((perfume, idx, results) => {
                        perfume.key = idx;
                        // const {name, brand} = perfume
                        return (
           
                            <div className="card" >
                                <Link to= {`${idx}`}>
                                <h1>{perfume.name}</h1>
                        </Link>
                         </div>      
        
                        )
                    })}

                </div>
            </div>
        </section>
    )

     {/* 

// <div className="card" >
//     <Link to={`/${perfume.id}`} key={perfume.id}>

//         <h1>{perfume.name}</h1>

//     </Link>
//     <h3>${perfume.price} USD</h3>

//     <div className="card-image">
//         <img src={perfume.image} alt={perfume.name} />

// 
//     </div>
// </div> */}
    

}




export default Perfumes;

// <MDBContainer fluid className="my-5">
//                       <MDBRow className="justify-content-center">
//                         <MDBCol md="6">
//                           <MDBCard className="text-black">
//                             <MDBIcon fab icon="apple" size="lg" className="px-3 pt-3 pb-2" />
//                             <MDBCardImage
//                               src={perfume.image}
//                               position="top"
//                               alt="Apple Computer"
//                             />
//                             <MDBCardBody>
//                               <div className="text-center">
//                                 <MDBCardTitle>Believing is seeing</MDBCardTitle>
//                                 <p className="text-muted mb-4">Apple pro display XDR</p>
//                               </div>
//                               <div>
//                                 <div className="d-flex justify-content-between">
//                                   <span>Pro Display XDR</span>
//                                   <span>$5,999</span>
//                                 </div>
//                                 <div className="d-flex justify-content-between">
//                                   <span>Pro stand</span>
//                                   <span>$999</span>
//                                 </div>
//                                 <div className="d-flex justify-content-between">
//                                   <span>Vesa Mount Adapter</span>
//                                   <span>$199</span>
//                                 </div>
//                               </div>
//                               <div className="d-flex justify-content-between total font-weight-bold mt-4">
//                                 <span>Total</span>
//                                 <span>$7,197.00</span>
//                               </div>
//                             </MDBCardBody>
//                           </MDBCard>
//                         </MDBCol>
//                       </MDBRow>
//                     </MDBContainer>



