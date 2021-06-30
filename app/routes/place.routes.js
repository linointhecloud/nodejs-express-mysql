module.exports = app => {
  const places = require("../controllers/place.controller.js")

  var router = require("express").Router();

  // Create a new Place
  router.post("/", places.create);

  // Retrieve all places
  router.get("/", places.findAll);

  // Retrieve a single Place with placeId
  router.get("/:id", places.findOne);

  // Update a Places with placeId
  router.put("/:id", places.update);

  // Delete a Places with placeId
  router.delete("/:id", places.delete);

  // Delete all Places
  router.delete("/", places.deleteAll);

  router.copy('/init', places.init);

  app.use('/api/places', router);
}