import EditForm from '../components/EditForm'

import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
const BASE_URL = `http://perfume-store-fm.herokuapp.com/profile/${params.id}`;


const Spacer = ({ height = "80px", bar = true }) => {
    return (<div className="spacer" style={{ height: height }}>{bar ? <div className="divider"></div> : null}</div>)
}
const Show = (props) => {
    const [editForm, setEditForm] = useState(null)
    const [person, setPerson] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate()
    const URL = `${BASE_URL}people/${id}`

    const getPeople = async () => {
        console.log(URL)
        // test your endpoint before making a request
        try {

            const response = await fetch(URL)
            const personData = await response.json()
            // console.log(personData)
            setPerson(personData)
            setEditForm(personData)
        } catch (err) {
            console.log(err)
        }
    }
    const loaded = () => {
        return (
            <div className="person">
                {/* <Spacer /> */}
                {/* spacers allow uniform space between sections / subsections of your ui -  */}
                <h1>Show Page</h1>
                <h2>{person.name}</h2>
                <h2>{person.title}</h2>
                <img src={person.image} alt={person.name + " image"} />
            </div>
        )
    }

    const loading = () => {
        return <h1>Loading.........</h1>
        // alternatively you can use the spinner 
    }

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        console.log('submit fired')
        e.preventDefault()
        const options = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editForm) // <===editForm is the current state
        }

        try {
            // await fetch (URL, options) => 
            console.log(URL)
            const response = await fetch(URL, options)
            const updatedPerson = await response.json()
            // trigger a new fetch (getPerson())

            setPerson(updatedPerson)
            setEditForm(updatedPerson)
        } catch (err) {
            console.log(err)
        }
        // we can reference our other handleSubmit (People) 
    }

    const removePerson = async () => {
        try {

            const options = { method: 'DELETE' }
            const URL = "http://localhost:4000/people/" + id
            console.log(URL)

            const response = await fetch(URL, options)
            const deletedPerson = await response.json()
            // our destroy - findByIdAndDelete >> original document
            console.log(deletedPerson)
            navigate('/')
        } catch (err) {
            console.log(err)
            navigate("http://localhost:4000/people/" + id)
        }
    }
    /* How to delete a resource from the show page:
    1. Add a dom button (return) +++
    2. Event Handler (click) > 
        > contact our database with a fetch
        > URL -> http://.../people/objectid 
        > options - method (delete)
        (assuming delete is a success)
        > redirect to homepage (useNavigate)
    3. add onClick to the button 
    */


    useEffect(() => {
        getPeople()
    }, [])

    // console.log(`Current person: ${JSON.stringify(person)}`)

    return <section>

        {editForm ?
        <EditForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            personData={editForm}
            val={`Edit ${person.name}`}
        /> : null}

        {person ? loaded() : loading()}

        <div className="button-wrapper">
            <Link to="/">Back Home</Link>
            <button 
            onClick={removePerson}
            >
                Delete Person
            </button>
        </div>
    </section>
}

export default Show

// import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Profile() {
    
    const [editForm, setEditForm] = useState(null)
  
    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })

    const updateProfile = async (e) => {
        e.preventDefault()
        try {
          await fetch(URL, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editForm),
          })
    
          // trigger a re-render after the fetch is complete
          getPerson()
        } catch (err) {
          console.log(err)
        }
      }
    
    
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


// const URL = 
