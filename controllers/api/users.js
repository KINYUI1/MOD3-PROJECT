const User = require('../../models/users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const SALT_ROUNDS = 6;

async function create(req,res){
    try {
        const user = await User.create(req.body)
        const token = createJWT(user)
        res.json(token)
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }

}

async function updateUser(req,res){
    const {id} = req.params
    req.body.password = await bcrypt.hash(req.body.password, SALT_ROUNDS)
    try {
        await User.findByIdAndUpdate(id,req.body)
    } catch (error) {
        console.log('from update user', error);
    }
}

async function login(req,res){
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        const token = createJWT(user);
        res.json(token);
      } catch {
        res.status(400).json('Bad Credentials');
      }
}

async function deleteuser(req,res){
    const {id}= req.params
    await User.findByIdAndDelete(id)
}

async function checkToken(req,res){
    console.log(req.user);
    res.json(req.exp)
}

// Helper funtion to create jwt tolen
function createJWT(user){
    return jwt.sign({user},process.env.SECRET,{expiresIn: '24H'})
}

module.exports = {create,login, checkToken, deleteuser, updateUser}