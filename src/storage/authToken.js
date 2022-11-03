// *This method is used to get an item from localStorage using the key.
const getUserToken = () => {
    return localStorage.getItem('token')
}

// *This method is used to add a key and a value to localStorage.
const setUserToken = (token) => {
    return localStorage.setItem('token', token)
}

// *This technique is used to delete all instances of localStorage.
const clearUserToken = () => {
  return localStorage.setItem('token', "")
}

export {getUserToken,setUserToken, clearUserToken}

