const express = require('express')
const path = require('path')
const favicon = require('serve-favicon')
const logger = require('morgan')
require('dotenv').config()
require('./config/database');
const multer = require('multer')
// const upload = multer({dest: 'uploads/'})

const app = express()
const PORT = process.env.PORT || 3001

app.use(logger('dev'))
app.use(express.json())
app.use(require('./config/checktoken'))
// app.use(multer({dest:'uploads/'}).single('image'))
// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/blogs', require('./routes/api/blogs'));

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


app.listen(PORT,()=>{
    console.log(`server is listening at port ${PORT}`);
})