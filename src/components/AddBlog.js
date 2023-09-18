import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState} from 'react'
import * as userServices from '../utilities/users-service'


function AddBlog() {

    const [content,setContent] = useState('')
    const [summary,setSummary] = useState('')
    const [title,setTitle] = useState('')
    const [image,setImage] = useState('')
const data1 = {
    content: content,
    summary: summary,
    title:title,
    image:image
}

const  handleSubmit =  (e)=>{
    e.preventDefault();
    const data = new FormData()
    data.set('title',title)
    data.set('summary',summary)
    data.set('image',image)
    data.set('content',content)
    // console.log(data);
   userServices.handleSubmit(data1)

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
       <form className='addblog' onSubmit={handleSubmit}>
        
        <input type="text" placeholder='Title...' name="title" value={title} onChange={(e)=>setTitle(e.target.value) }/>
       
        <input type="text" placeholder='Summary...' name="summary" value={summary} onChange={(e)=>setSummary(e.target.value)} />
        
        <input type="file" name="image"  onChange={(e)=> setImage(e.target.files) }/>
        
        <ReactQuill  name='content'  modules={modules} formats={formats} value={content} onChange={newValue=>setContent(newValue)}/>
        <input type='submit' /> 
       </form> 
    </div> );
}

export default AddBlog;