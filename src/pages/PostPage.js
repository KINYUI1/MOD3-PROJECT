import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import * as blogServices from '../utilities/blogs-services'


function Postpage(props) {
    const {_id} = props.user
    const {id} = useParams()
    const [post,setPost] = useState(null)
    console.log(post);
    console.log(id);
    console.log(_id);
    const deletepost = ()=>{
        if(window.confirm('Do you want to delete this post?')){
            blogServices.deleteblog(id)
            // <Navigate to={}/>
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
        {_id == post.authorID && <><button>Update Post</button><button onClick={deletepost}>Delete Post</button></>}
        </div>
        <div>
        <img src={`http://localhost:3001/${post.image}`}/>
        </div>
        <h3>{post.summary}</h3>
        <div dangerouslySetInnerHTML={{__html:post.content}}/>
    </div> );
}

export default Postpage;