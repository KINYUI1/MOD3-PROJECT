const fs = require('fs')
const addblog = async (req,res)=>{
    const {originalname, path} = req.file
    const parts = originalname.split('.')
    const ext = parts[parts.length - 1]
    fs.renameSync(path, path + '.' + ext)
    console.log(ext);
    // console.log(originalname);
    // console.log(req.file);
    // console.log(req.body);
    // res.status(200).json('file uploaded')
}

module.exports ={addblog}