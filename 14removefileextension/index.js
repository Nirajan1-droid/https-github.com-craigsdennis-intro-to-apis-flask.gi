const express =require('express')
let app  = express()
 console.log(__dirname)
const path = require('path')
const publicPath = path.join(__dirname,"public")//path helps to get the path of the file inside or outside the folder

//use is the function of the express js

// app.use(express.static(publicPath))

//static loads the static page or static content

app.get('',(_,resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})
app.get('/about',(_,resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})
//nopage ko lagi we use *  and in the nopage.html we can show anything we like : 404 , oops page not found etc.
//that's how the page is secured in the nodejs 

app.get('*',(_,res)=>{
res.sendFile(`${publicPath}/nopage.html`)})

app.listen(5000);
