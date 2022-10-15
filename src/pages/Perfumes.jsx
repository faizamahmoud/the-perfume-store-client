
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

// ! need token to add it to user profile
function Perfumes() {

    const url = 'http://perfume-store-fm.herokuapp.com/inventory'

    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const response = await fetch(url);
            const json = await response.json();
            return json;
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
        data.map((perfume, idx, results) => {
            perfume.key = idx;
            return (
                <Card>
                    <Card.Body>
                        <Card.Img variant="bottom" src={perfume.image} />
                        <Card.Text>
                            <Link to={`${perfume._id}`}>{perfume.name}</Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            )
        })
    )
}

export default Perfumes;