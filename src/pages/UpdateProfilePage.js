import {useState} from 'react'
import * as usersService from '../utilities/users-service'

const UpdateProfilePage = (user)=>{

    const [formData,setFormData] = useState({
        name:'',
        email:"",
        password:"",
        confirm:'',
       
    })
    
    const disable = formData.password !== formData.confirm;
    
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
      };

      const handleSubmit =(e)=>{
        e.preventDefault();
        try {
            //copy the form data
            const userFormData = {...formData}
    
            //removing extra properties
            delete userFormData.confirm
            
    
            // calling user service sign up function
            usersService.updateUser(userFormData, user.user._id)
            usersService.logOut()
        } catch (error) {
            console.log(error);
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
            <button type='submit' disabled={disable}>Update Profile</button>
        </form>
    </div>
    </div>
}

export default UpdateProfilePage;