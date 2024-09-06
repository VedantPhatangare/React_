import React from 'react'
import { useContext } from 'react'
import userContext from '../context/UserContext'
const Profile = () => {
  const {User} = useContext(userContext)
    if (!User) return <div>Please Login</div>

    return (
    <div>
        Welcome {User.username}, password is {User.password}
    </div>)
}

export default Profile
