const Edit = ({ handleUpdateSubmit, handleUpdateChange, updateProfile, val }) => {

    <form className="EditForm" onSubmit={handleUpdateSubmit}>
        <label htmlFor="username">Username:</label>

        <input id="username" type="text" placeholder="username" onChange={handleUpdateChange} value={updateProfile.username} />


        <label htmlFor="email">email:</label>
        <input id="email" type="text" placeholder="email" onChange={handleUpdateChange} value={updateProfile.email} />

        <label htmlFor="password">password:</label>

        <input id="password" type="text" placeholder="password" onChange={handleUpdateChange} value={updateProfile.password} />

        <button type="submit" value={val} >Edit Profile</button>
    </form>
}

export default Edit
// required name="username"