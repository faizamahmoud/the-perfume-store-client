// import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Profile({deleteProfile, updateProfile}) {
    // no 

    const [editForm, setEditForm] = useState(null)

    // const navigate = useNavigate()
    // const params = useParams()
    // const { id } = params



    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        const updateUser = await updateProfile(editForm)

        try {
            
            setEditForm(updateUser)
        } catch (err) {
            console.log(err)
        }
    }
    

    const loaded = () => (
        <>
            <section>
                <div className="user">
                    <h1>Show Page</h1>
                    <h2>{editForm.username}</h2>
                    <h2>{editForm.email}</h2>
                    {/* <img src={editForm.image} alt={editForm.name + " image"} /> */}
                    <div>
                        <button
                            className="delete"
                            onClick={deleteProfile}>
                            Remove user profile
                        </button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Edit this Profile</h2>
                <form onSubmit={handleSubmit}>
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
                    <input type="submit" value="Update Profile" />
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
        <div>{editForm ? loaded() : loading()}</div>
    )
}

export default Profile



