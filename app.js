//Requires
const express = require('express')
const bodyParser = require("body-parser")
const app = express()



//Setup
const port = 3000
app.set("view engine", "ejs")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static(__dirname+"/public"));

//Variables & Constants
var items = ["Buy food", "Cook food", "Eat food"]

//Get
app.get('/', (req, res) => {
  var date = new Date()
  //formatting date:
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  //render:
  var day = date.toLocaleDateString("en-US", options)
  res.render("list",
  {kindOfDay: day,
  items: items})
})

app.post("/", (req, res)=>{
  var item = req.body.nextItem
  items.push(item)
  res.redirect("/")
})


//Listen for the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`))