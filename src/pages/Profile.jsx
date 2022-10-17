import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ProfilePage from '../components/Profile';

function Profile() {

    const { id } = useParams();
    const [editForm, setEditForm] = useState({})
    const navigateTo = useNavigate();
    const url = 'http://perfume-store-fm.herokuapp.com/profile/'
    //  const URL = `${BASE_URL}profile/${id}`
    console.log(url)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm) // <===editForm is the current state
        }
        try {
            
            const response = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${id}`, options)
            const updatedPerson = await response.json()
            // trigger a new fetch (getPerson())
            // setEditForm(updatedPerson)
            
        } catch (err) {
            console.log(err)
        }
    }


    const getForm = async () => {

        try {
            
            const response = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${id}`)
            console.log(`id: ${id}`)
            const previousData = await response.json()
            console.log('previous', previousData.user)
            setEditForm(previousData.user)
            console.log(editForm) 
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    useEffect(() => {
        getForm()
    }, [])


  const deleteUser = async () => {
    try {
      const configs = {
        method: "DELETE",

      };
      const response = await fetch(`http://perfume-store-fm.herokuapp.com/profile/${id}`, configs);
      const deleteProfile = await response.json()
      console.log(deleteProfile)
      // logout();

      navigateTo('/');
    } catch (error) {
      console.log(error)
    }
  }



    // console.log(editForm)
    const loaded = () => (
        <>
            <section>
                <div className="user">

                    <div>
                        <button
                            className="delete"
                            onClick={deleteUser}>
                            Remove user profile
                        </button>
                    </div>
                </div> 
            
             

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
        <section>
            <ProfilePage />
            <div>{editForm ? loaded() : loading()}</div>
        </section>
    )
}

export default Profile


