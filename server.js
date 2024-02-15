const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 5000

const app = express()

//middleware
app.set("view engine", "ejs")

// Routes
app.get('/', (req,res)=>{res.render("index", {text:"World"})})
app.get('/about', (req,res)=>{res.render("about")})
app.get('/info', (req,res)=>{res.render("info", {firstName: "Your Name" })})





//app running notiification
app.listen(port, ()=>console.log(`Server started on port ${port}`))

