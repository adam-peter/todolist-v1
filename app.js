//requires:
const express = require("express")
const bodyParser = require("body-parser")
const secret = require("./secret.json")

//setup
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

//variables
let days = ["Buy food", "Cook food", "Eat food"]
let workItems = []

//get:
app.get("/", (req, res) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  const day = new Date().toLocaleDateString("en-US", options)
  res.render("list", {
    listTitle: day,
    items: days
  })
})

app.get("/work", (req, res)=>{
  res.render("list", {
    listTitle: "Work list",
    items: workItems
  })
})

//post:
app.post("/", (req, res) => {
  let item = req.body.item
  if (req.body.list === "Work"){
    workItems.push(item)
    res.redirect("/work")
  } else{
    days.push(item)
    res.redirect("/")
  }
})

app.post("/work", (req, res)=>{
  workItems.push(req.body.item)
  res.redirect("/work")
})




app.listen(port, () => {
  console.log("Server runnin on port 3000!");
})