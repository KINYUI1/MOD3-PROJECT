import { Link } from "react-router-dom";
import * as userService from '../utilities/users-service'

const NavBar = ({user, setUser})=>{
    const handleLogOut = ()=>{
        const confirm = window.confirm('Are You Sure You Want To Log Out?')
        if(confirm){
            userService.logOut()
            setUser(null)
        }
    }

    const deleteUser = ()=>{
        const confirm = window.confirm('Are You Sure You Want To Delete Your Account?')
        if(confirm){
            userService.logOut()
            console.log(user);
            userService.deleteUser(user._id)
        }
        
    }

    const {name} = user
    return <nav className="nav">
        <h2>Welcome To VENT, {name}</h2>
        <div>
        <Link to='updateprofile'>Update Profile</Link>
        &nbsp; | &nbsp;
        <Link to=''  onClick={deleteUser}>Delete Account</Link>
        &nbsp; | &nbsp;
        <Link to='' onClick={handleLogOut}>Log Out</Link>
        &nbsp; | &nbsp;
        <Link to='addblog'>Add Blog</Link>
        </div>
    </nav>
}

export default NavBar;