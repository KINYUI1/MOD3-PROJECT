import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import * as blogServices from '../utilities/blogs-services'



function Postpage(props) {
    const navigate =  useNavigate()
    console.log(props);
    const authorId = props.user? props.user._id: null
    const {id} = useParams()
    const [post,setPost] = useState(null)
    console.log(post);
    console.log(id);
    console.log(authorId);
    const deletepost = ()=>{
        if(window.confirm('Do you want to delete this post?')){
            blogServices.deleteblog(id)
            navigate('/')
        }
    }
    useEffect(()=>{
        const getblogbyid = async ()=>{

            const data = await blogServices.getDatabyId(id)
            setPost(data)
        }
        getblogbyid()
    },[id])
    if(!post){return ''}

    return ( <div className="postpage">
        <div className="image">
        <h2>{post.title}</h2>
        {authorId === post.authorID && <><Link to={`/updatepost/${id}`}><button>Update Post</button></Link><Link to=''><button onClick={deletepost}>Delete Post</button></Link></>}
        </div>
        <div>
        <img src={`http://localhost:3001/${post.image}`} alt={post.title}/>
        </div>
        <h3>{post.summary}</h3>
        <div dangerouslySetInnerHTML={{__html:post.content}}/>
    </div> );
}

export default Postpage;