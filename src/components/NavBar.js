import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'

const NavBar = ({user, setUser})=>{
    const handleLogOut = ()=>{
        userService.logOut()
        setUser(null)
    }

    const deleteUser = ()=>{
        userService.logOut()
        console.log(user);
        userService.deleteUser(user._id)
    }

    const {name} = user
    return <nav>
        <h2>Welcome, {name}</h2>
        <Link to='updateprofile'>Update Profile</Link>
        &nbsp; | &nbsp;
        <Link to=''  onClick={deleteUser}>Delete Account</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp;
        <Link to='addblog'>Add Blog</Link>
    </nav>
}

export default NavBar;