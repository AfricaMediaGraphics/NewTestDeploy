const express = require("express")
const connectToDB = require("./config/db")
const User = require("./user")

const dotenv = require("dotenv")
const bodyParser = require("body-parser")
dotenv.config()
const port = process.env.PORT || 5000

const app = express()
connectToDB()

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
app.get('/',(req,res)=>{res.render("index", {text:"Lets book buy and play, together."})})
app.get('/about', alive, (req,res)=>{res.render("beema")})
app.get('/info', (req,res)=>{res.render("info", {firstName: "Enter Your Name" })})
app.get('/contact', (req,res)=>{res.render("contact")})
app.get('/groupConnect', (req,res)=>{res.render("groupConnect")})



//Post Routes
app.post('/about', (req,res)=>{
  res.render("contact", {text:"Your account has been created. Now click select group"})
    console.log(req.body.email + " "+ "renews on" + " "+req.body.renewDate)
  
    //db code***

  let frontEmail = req.body.email
  let frontName = req.body.renewDate

  console.log(frontEmail + " for the DB " + frontName)
   
  //DB Actions
    run()
    async function run(){
      try{
        const user = await User.create({
           name:frontName, 
           age:"18",
           email:frontEmail,
           hobbies:["Jubilee"]
        })
      
        app.get('/', (req,res)=>{res.send("you are now registered as: " + user.name+" "+"and email: " + user.email)})
        console.log(user)
      }catch(e){
      console.log(e.message)
      }

      }
})


//app running notiification
app.listen(port, ()=>console.log(`Server started on port ${port}`))
