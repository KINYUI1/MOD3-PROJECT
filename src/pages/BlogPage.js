import {useEffect,useState} from 'react'
import * as blogsServices from '../utilities/blogs-services'
import Post from "../components/Post";

function BlogPage() {
console.log('from blogpage');
    const [blogs,SetBlogs] = useState([])
    useEffect(()=>{
        async function getdata(){
            const data = await blogsServices.getData()
            SetBlogs(data)
        }
        getdata()
    },[])
  return (
    <div>
        {blogs.length > 0 ? blogs.map((blog)=> <Post key={blog._id} blog={blog}/>):''}
    </div>
  );
}

export default BlogPage;
