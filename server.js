const express = require("express")
const dotenv = require("dotenv")
const bodyParser = require("body-parser")
dotenv.config()
const port = process.env.PORT || 5000

const app = express()

//view engine
app.set("view engine", "ejs")

//body parser
let urlencodedParser = app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

//static files
app.use(express.static(__dirname+ '/public'))

// Routes
app.get('/', (req,res)=>{res.render("index", {text:"Early Stage. Syndicated. Public Exits. NBO."})})
app.get('/about', (req,res)=>{res.render("beema")})
app.get('/info', (req,res)=>{res.render("info", {firstName: "Enter Your Name" })})
app.get('/contact', (req,res)=>{res.render("contact")})

app.post('/about', (req,res)=>{
    res.render("about", {text:"Your account has been created. Now click select group"})
    console.log(req.body.email + " "+ "renews on" + " "+req.body.renewDate)
    //db vars-->
    //let userNameNew = req.body.email
    //console.log(userNameNew)
    //db function-->
    //console.log("Updated record on database for userNameNew")
})


//app running notiification
app.listen(port, ()=>console.log(`Server started on port ${port}`))
