module.exports = app => {
  const places = require("../controllers/place.controller.js")

  // Create a new Place
  app.post("/places", places.create);

  // Retrieve all places
  app.get("/places", places.findAll);

  // Retrieve a single Place with placeId
  app.get("/places/:placeId", places.findOne);

  // Update a Places with placeId
  app.put("/places/:placeId", places.update);

  // Delete a Places with placeId
  app.delete("/places/:placeId", places.delete);

  // Delete all Places
  app.delete("/places", places.deleteAll);
}