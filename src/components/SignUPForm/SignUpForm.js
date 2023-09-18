import {useState} from 'react'
import {signUp} from '../../utilities/users-service';
import {useNavigate} from 'react-router-dom'

const SignUpForm = ({setUser})=>{

const [formData,setFormData] = useState({
    name:'',
    email:"",
    password:"",
    confirm:'',
    error:''
})

const navigate = useNavigate()
const disable = formData.password !== formData.confirm;

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        error:''
    });
  };
const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        console.log(formData);
        //copy the form data
        const userFormData = {...formData}

        //removing extra properties
        delete userFormData.confirm
        delete userFormData.error

        // calling user service sign up function
        const user = await signUp(userFormData)
       console.log('token', user);
       setUser(user)
       navigate('/')
    } catch (error) {
        console.log(error);
        setFormData({
            ...formData, error: 'Sign Up Failed - Try Again'
        })
    }
   
}
    return<div>
        <div className='form-container'>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label >Name:</label>
                <input type='text' name='name' value={formData.name} required onChange={handleChange}/>
                <label >Email:</label>
                <input type='text' name='email' value={formData.email} required onChange={handleChange}/>
                <label >Password:</label>
                <input type='text'  name='password' value={formData.password} required onChange={handleChange}/>
                <label >Confirm:</label>
                <input type='text' name='confirm' value={formData.confirm} required onChange={handleChange}/>
                <button type='submit' disabled={disable}>Sign Up</button>
            </form>
        </div>
        <p className="error-message">&nbsp;{formData.error}</p>
        </div>
}

export default SignUpForm;