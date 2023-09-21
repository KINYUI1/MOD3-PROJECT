const fs = require('fs')
const Post = require('../../models/blogs')

const addblog = async (req,res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    const newPath = path + '.' + ext;
    fs.renameSync(path, newPath)
    
    const {title,summary,content,authorID} = req.body;

    const data = await Post.create({
        title,
        summary,
        content,
        authorID,
        image:newPath
    })
    res.send(data)
}

const getblog = async (req,res)=>{
   const responce =  await Post.find({}).sort({createdAt: -1}).limit(10)
   res.json(responce)
}

const getblogbyid = async (req,res)=>{
    const {id} = req.params
    const responce = await Post.findById(id)
    res.json(responce)
}

const deleteblog = async (req,res)=>{
const {id} = req.params
try {
    await Post.findByIdAndDelete(id)
} catch (error) {
    console.log('from deleteblog', error);
}
}

module.exports ={addblog , getblog, getblogbyid,deleteblog}