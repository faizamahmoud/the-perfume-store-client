import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom"
import Edit from "../components/Edit"

// delete and update users

export default function Profile({deleteProfile, updateProfile}) {

    const [profile, setProfile] = useState(null) ;
    const [editProfile, setEditProfile] = useState(null);
    
    

    
    

    const handleUpdateSubmit = async (e) => {
        const updateUser = await updateProfile(editProfile)

        try {
            setProfile(updateUser)
            setEditProfile(updateUser)
        } catch (err) {
            console.log(err)
        }
    }
        
    
    const handleUpdateChange = (e) => setEditProfile({ ...editProfile, [e.target.name]: e.target.value })
       
    const loaded = () => {
        return (
            <div className="user">
         
                <h1>Update Page</h1>
                <h2>{profile.username}</h2>
                <h2>{profile.email}</h2>
                <h2>{profile.password}</h2>
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner 
    }

    return (
        <section>

            {editProfile ?
                <Edit handleChange={handleUpdateChange} handleSubmit={handleUpdateSubmit} updateProfile={editProfile} val={`Edit ${profile.username}`} /> : null}

            {profile ? loaded() : loading()}

            <div className="button-wrapper"><Link to="/">Back Home</Link>
            <button onClick={deleteProfile} >Delete </button>
            </div>
        </section>
    )
}






