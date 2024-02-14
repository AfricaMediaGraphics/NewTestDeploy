const express = require("express")
const dotenv = require("dotenv")
dotenv.config()
const port = process.env.PORT || 5000

const app = express()

app.set("view engine", "ejs")

app.get('/views', (req,res)=>{res.render("index")})


//app running notiification

app.listen(port, ()=>console.log(`Server started on port ${port}`))

