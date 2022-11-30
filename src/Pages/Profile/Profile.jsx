import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './index.css'


function Profile(props) {

    const { id } = useParams();
    const [editForm, setEditForm] = useState({})
    const navigateTo = useNavigate();
    const URL = 'http://perfume-store-fm.herokuapp.com/profile';
    


    const handleSubmit = async (e) => {
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            
            body: JSON.stringify(editForm) 
        }
        try {
            const response = await fetch(`${URL}/${id}`, options)
            const updatedPerson = await response.json()
        } catch (err) {
            console.log(err)
        }
    }


    const getForm = async () => {

        try {
            
            const response = await fetch(`${URL}/${id}`)
            // console.log(`id: ${id}`)
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
      const response = await fetch(`url/${id}`, configs);
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
                <div className="User">

               <img src= "https://www.geo.tv/assets/uploads/updates/2019-09-28/249189_5972950_updates.jpg"/>
                <form className="User form" onSubmit={handleSubmit}>
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
                    
                    <div>
                        <button
                            className="delete"
                            onClick={deleteUser}>
                            delete
                        </button>
                        <input type="submit" value="update" />
                    </div>
                
                </form>
                
                </div> 
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
            
            <div>{editForm ? loaded() : loading()}</div>
        </section>
    )
}

export default Profile


