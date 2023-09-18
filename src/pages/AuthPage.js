import SignUpForm from "../components/SignUPForm/SignUpForm";
import LoginForm from "../components/LogInForm/LogInForm";
import {useState} from 'react'

const AuthPage = ({setUser})=>{
    const [showLogin,setShowLogin] = useState(true)
    return<div>
        <h1>AuthPage</h1>
        <button onClick={()=>setShowLogin(!showLogin)}>{showLogin? 'Sign UP': 'Log In'}</button>
        {
            showLogin? (<LoginForm setUser={setUser}/>):(<SignUpForm setUser={setUser}/>)
        }
    </div>
}

export default AuthPage;