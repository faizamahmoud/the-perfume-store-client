import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Show(props) {
    // no 
    const [user, setUser] = useState(null)
    const [editForm, setEditForm] = useState("")

    const navigate = useNavigate()

    const params = useParams()
    const { id } = params

    const URL = `https://perfume-store-fm.herokuapp.com/profile/${id}`;

    // console.log("id", id, URL)
    // console.log(`Current Person: ${JSON.stringify(person)}`)

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })


    const updateUserProfile = async (e) => {
        e.preventDefault()
        // console.log(editForm)
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm)
            }
            // * find and set
            const response = await fetch(URL, options)
            const updatedProfile = await response.json()
            setUser(updatedProfile)
            setEditForm(updatedProfile)

        } catch (err) {
            console.log(err)
            navigate(URL)
        }
    }

    const getUserProfile = async () => {
        try {

            const response = await fetch(URL)
            const foundUser = await response.json()

            setPerson(foundUser)
            setEditForm(foundUser)

        } catch (err) {
            console.log(err)
        }
    }

    const removeUserProfile = async () => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(URL, options)
            const deletedPerson = await response.json()
            // console.log(deletedPerson)
            navigate('/')

        } catch (err) {
            console.log(err)
            navigate(URL)
        }
    }

    useEffect(() => {
        getUserProfile()
    }, [])


    const loaded = () => (
        <>
            <section>
                <div className="user">
                    <h1>Show Page</h1>
                    <h2>{user.username}</h2>
                    <h2>{user.email}</h2>
                    <img src={user.image} alt={user.name + " image"} />
                    <div>
                        <button
                            className="delete"
                            onClick={removeUserProfile}>
                            Remove user profile
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Edit this Profile</h2>
                <form onSubmit={updateUserProfile}>
                    <input
                        type="text"
                        value={editForm.username}
                        name="username"
                        placeholder="username"
                        onChange={handleChange}
                    />
                    <input
                        type="email"
                        value={editForm.email}
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        value={editForm.password}
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                    />
                    <input type="submit" value="Update Person" />
                </form>
            </section>
        </>


    )


    const loading = () => (
        <>
            <h1>
                Loading...
            </h1>
        </>
    );
    return (
        <div>{person ? loaded() : loading()}</div>
    )
}

export default Show









// !page displays user information after the login action is successful.

import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import { Link} from "react-router-dom"

// delete and update users
// {deleteProfile, updateProfile}
export default function Profile() {
    
    const params = useParams();
    const {id} = params;
    const URL = `https://perfume-store-fm.herokuapp.com/profile/${id}`;
    const [profile, setProfile] = useState(null) ;
    const [editProfile, setEditProfile] = useState(null);

    // !add bearer tokens
    const updateUser = async (e) => {
        e.preventDefault()
        try {
            const configs = {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(editProfile)
            };
            const response = await fetch(URL, configs);
            const updateProfile = await response.json();
            console.log(updateProfile)
            setProfile(updateUser)
            setEditProfile(updateUser)
        } catch (err) {
            console.log(err)
        }
    }
    
    const handleUpdateSubmit = async (e) => {
        const updateUser = await updateProfile(editProfile)

        try {
            setProfile(updateUser)
            setEditProfile(updateUser)
            console.log('profile: ', profile)
        } catch (err) {
            console.log(err)
        }
    }
        
    const handleUpdateChange = (e) => setEditProfile({ ...editProfile, [e.target.name]: e.target.value })

    // try {
        const loaded = () => {
            console.log('form: ', profile)
            return (
                <div className="user">

                    <h1>Update Page</h1>
                    <h2>{profile.username}</h2>
                    <h2>{profile.email}</h2>
                    <h2>{profile.password}</h2>
                </div>
            )
        }
    // } catch (err) {
        const loading = () => {
            return <h1>Loading.........</h1>

        }
    // }
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
                {/* <button onClick={deleteProfile} >Delete </button> */}
            </div>
        </section>
    )
}






