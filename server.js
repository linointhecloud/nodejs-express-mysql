const express = require("express")
const cors = require("cors")
const db = require("./app/models")

const app = express()

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

// parse requests of content-type: application/json
// app.use(bodyParser.json()); // for express lt 4.16.0
app.use(express.json())

// parse requests of content-type: application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: true })); // for express lt 4.16.0
app.use(express.urlencoded({extended: true}))

/*
const run = async () => {
  const tut1 = await controller.createTutorial({
    title: "Tut#1",
    description: "Tut#1 Description",
  });

  const tut2 = await controller.createTutorial({
    title: "Tut#2",
    description: "Tut#2 Description",
  });

  const comment1 = await controller.createComment(tut1.id, {
    name: "bezkoder",
    text: "Good job!",
  });

  await controller.createComment(tut1.id, {
    name: "zkoder",
    text: "One of the best tuts!",
  });

  const comment2 = await controller.createComment(tut2.id, {
    name: "aKoder",
    text: "Hi, thank you!",
  });

  await controller.createComment(tut2.id, {
    name: "anotherKoder",
    text: "Awesome tut!",
  });
};
*/

// db.sequelize.sync()
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
  //run();
});

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to cloudcatwannabe application"})
})

require("./app/routes/place.routes.js")(app)
// require("./app/routes/customer.routes.js")(app)
// require("./app/routes/tutorial.routes.js")(app)

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})