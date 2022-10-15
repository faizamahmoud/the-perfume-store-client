// !page displays user information after the login action is successful.
import { useState } from "react";

import { Link } from "react-router-dom"

// delete and update users

export default function Profile() {

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
        
    }

    return (
        <section>

            {editProfile ?
            <form className="EditForm" onSubmit={handleUpdateSubmit}>
                <label htmlFor="username">Username:</label>
                <input id="username" type="text" placeholder="username" onChange={handleUpdateChange} value={updateProfile.username} />
                <label htmlFor="email">email:</label>
                <input id="email" type="text" placeholder="email" onChange={handleUpdateChange} value={updateProfile.email} />
                <label htmlFor="password">password:</label>
                <input id="password" type="text" placeholder="password" onChange={handleUpdateChange} value={updateProfile.password} />
                <button type="submit">Edit Profile</button>
            </form>
             : null} 

            {profile ? loaded() : loading()}

            <div className="button-wrapper"><Link to="/">Back Home</Link>
                <button onClick={deleteProfile} >Delete </button>
            </div>
        </section>
    )
}






