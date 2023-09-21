import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState} from 'react'
import * as blogsServices from '../utilities/blogs-services'
import {Navigate} from 'react-router-dom'




function AddBlog({user}) {

    const [content,setContent] = useState('')
    const [summary,setSummary] = useState('')
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [navigate, setNavigate] = useState(false)
    const [author,setAuthor] = useState(user._id)


const  handleSubmit =  (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('title',title)
    formData.append('summary',summary)
    formData.append('image',image)
    formData.append('content',content)
    formData.append('authorID',author)
    console.log(formData.getAll('authorID'));
    const responce = blogsServices.handleSubmit(formData)
    if(responce){
      setNavigate(true)
    }
   

}

if(navigate){
  return <Navigate to='/'/>
}

    const modules = {
        toolbar: [
          [{ 'header': [1, 2, false] }],
          ['bold', 'italic', 'underline','strike', 'blockquote'],
          [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
          ['link', 'image'],
          ['clean']
        ],
      }
    
     const formats = [
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image'
      ]

    return ( <div >
       <form className='addblog' encType="multipart/form-data" onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Title...' name="title" value={title} onChange={(e)=>setTitle(e.target.value) }/>
       
        <input type="text" placeholder='Summary...' name="summary" value={summary} onChange={(e)=>setSummary(e.target.value)} />
        
        <input type="file" name="image"  onChange={(e)=> setImage(e.target.files[0]) }/>
        
        <ReactQuill  name='content'  modules={modules} formats={formats} value={content} onChange={newValue=>setContent(newValue)}/>
        <input type='submit' /> 
       </form> 
    </div> );
}

export default AddBlog;