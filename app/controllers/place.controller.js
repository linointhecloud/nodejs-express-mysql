const db = require("../models");
const Place = db.places;
const Photo = db.photos;
const Op = db.Sequelize.Op;

// Create and Save a new Place
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Place
  const place = {
    name: req.body.name,
    description: req.body.description,
    longitude: req.body.longitude,
    latitude: req.body.latitude
  };

  // Save Place in the database
  Place.create(place)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Place."
      });
    });
};

// Retrieve all Places from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Place.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving places."
      });
    });
};

// Find a single place with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Place.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Place with id=" + id
      });
    });
};

// Update a Place by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Place.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Place was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Place with id=${id}. Maybe Place was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Place with id=" + id
      });
    });
};

// Delete a Place with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Place.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Place was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Place with id=${id}. Maybe Place was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Place with id=" + id
      });
    });
};

// Delete all Place from the database.
exports.deleteAll = (req, res) => {
  Place.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Places were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Places."
      });
    });
};