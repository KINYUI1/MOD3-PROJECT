import * as blogsApi from './blogs-api'

export async function handleSubmit(blog){
    return await blogsApi.addblog(blog)
   }
   
export async function getData(){
     return await blogsApi.getData()
   }
export async function getDatabyId(id){
  return await blogsApi.getDatabyId(id)
}

export async function deleteblog(id){
blogsApi.deleteblog(id)
}
export async function handleupdate(blog,id){
  return await blogsApi.updateblog(blog,id)
 }
