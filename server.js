const express = require("express")
const bodyParser = require("body-parser")

const app = express()

// parse requests of content-type: application/json
// app.use(bodyParser.json()); // for express lt 4.16.0
app.use(express.json())

// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); // for express lt 4.16.0
app.use(express.urlencoded({extended: true}))

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cloudcatwannabe application"})
})

require("./app/routes/customer.routes.js")(app)

// set port, listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port")
})