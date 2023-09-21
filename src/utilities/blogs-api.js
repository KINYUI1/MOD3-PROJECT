const BLOG_URL = "/api/blogs"

export function addblog(blog){
    const data = fetch(`${BLOG_URL}/addblog`,{
      method:'POST',
      body:  blog,
     
    })
    return data
  }

  export async function getData(){
    const res = await fetch(`${BLOG_URL}/getblog`)
    const data = await res.json()
    return data
  }
export async function getDatabyId(id){
  const res = await fetch(`${BLOG_URL}/getblogbyid/${id}`)
    const data = await res.json()
    return data
}
export async function deleteblog(id){
  await fetch(`${BLOG_URL}/deleteblog/${id}`,{
    method:'DELETE'
  })
  console.log('deleted post',id);
  }
  