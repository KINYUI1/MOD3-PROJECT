import {useState,useEffect} from 'react'
import * as blogsServices from '../utilities/blogs-services'
import {Navigate, useParams} from 'react-router-dom'
import ReactQuill from 'react-quill';

function UpdatePostPage({user}) {

    const {id} = useParams();
    const [content,setContent] = useState('')
    const [summary,setSummary] = useState('')
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
    const [navigate, setNavigate] = useState(false)
    const [author,setAuthor] = useState('')

    useEffect(()=>{
        async function getdata(){
            const data = await blogsServices.getDatabyId(id)
            setAuthor(user._id)
            setTitle(data.title)
            setSummary(data.summary)
            setContent(data.content)
        }
        getdata()
    })
console.log(user._id);
const  handleUpdate =  (e)=>{
    e.preventDefault();
    const formData = new FormData()
    formData.append('title',title)
    formData.append('summary',summary)
    formData.append('image',image)
    formData.append('content',content)
    formData.append('authorID',author);
    const responce = blogsServices.handleupdate(formData,id)
    if(responce){
      setNavigate(true)
    }
    console.log(formData.getAll('title'));
   

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
        <h2>Update Post Page</h2>

       <form className='addblog' encType="multipart/form-data" onSubmit={handleUpdate}>
        
        <input type="text" placeholder='Title...' name="title" value={title} onChange={(e)=>setTitle(e.target.value) } required/>
       
        <input type="text" placeholder='Summary...' name="summary" value={summary} onChange={(e)=>setSummary(e.target.value)} required/>
        
        <input type="file" name="image"  onChange={(e)=> setImage(e.target.files[0]) } required/>
        
        <ReactQuill  name='content'  modules={modules} formats={formats} value={content} onChange={newValue=>setContent(newValue)} required/>
        <input type='submit' value="Update Post"/> 
       </form> 
    </div> );
}

export default UpdatePostPage;