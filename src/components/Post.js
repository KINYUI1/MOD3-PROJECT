import { Link } from "react-router-dom";

function Post({blog}) {
  const bloginfo = blog?(<div className="post">
   
  <img
    src={'http://localhost:3001/'+ blog.image}
    alt="img"
  />
  <div>
  <Link to={`/post/${blog._id}`}>
    <h2>{blog.title}</h2>
    <p>{blog.summary}</p></Link>
    <div className="author">
      <p>By {blog._id} ,</p>
      <p>{blog.createdAt}</p>
    </div>
  </div>
</div>) : '';
    return  bloginfo    
}

export default Post;