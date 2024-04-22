const express = require("express")
const dotenv = require("dotenv")
const connectToDB = require("./config/db")
const User = require("./user")
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

//subscribe page visitor log
function alive(req,res,next){console.log("Customer just walked in"); next()}

//Get Routes
app.get('/',(req,res)=>{res.render("index", {text:"Early Stage. Syndicated. Public Exits. NBO."})})
app.get('/about', alive, (req,res)=>{res.render("beema")})
app.get('/info', (req,res)=>{res.render("info", {firstName: "Enter Your Name" })})
app.get('/contact', (req,res)=>{res.render("contact")})
app.get('/groupConnect', (req,res)=>{res.render("groupConnect")})

//Post Routes
app.post('/about', (req,res)=>{
  res.render("about", {text:"Your account has been created. Now click select group"})
    console.log(req.body.email + " "+ "renews on" + " "+req.body.renewDate)
   
   //db code***

  let frontEmail = req.body.email
  let frontName = req.body.renewDate

//DB Actions
run()
async function run(){
    try{
        const user = await User.create({
            name:frontName, 
            age:"38",
            email:frontEmail,
            city:"Namibia",
            hobbies:["rolling", "strolling", "mingling"]
        })
        app.get('/', (req,res)=>{res.send("you are now registered as: " + user.name+" "+"and email: " + user.email)})
        console.log(user)
    }catch(e){
        console.log(e.message)
    }
   
}

  console.log(frontEmail + " for the DB" + frontName)
    //db vars-->
    //let userNameNew = req.body.email
    //console.log(userNameNew)
    //db function-->
    //console.log("Updated record on database for userNameNew")
})


//app running notiification
app.listen(port, ()=>console.log(`Server started on port ${port}`))
