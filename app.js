//requires:
const express = require("express")
const bodyParser = require("body-parser")
const secret = require("./secret.json")

//setup
const app = express()
const port = 3000
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set('view engine', 'ejs')
app.use(express.static(__dirname+"/public"))

//variables
let items = ["Buy food", "Cook food", "Eat food"]

//get
app.get("/", (req, res)=>{
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric"
  }
  const day = new Date().toLocaleDateString("en-US", options)
  console.log(day);
  res.render("list", {
      day: day,
      items: items
  })
})

app.post("/", (req, res)=>{
  items.push(req.body.item)
  res.redirect("/")
})




app.listen(port, ()=>{
  console.log("Server runnin on port 3000!");
})
