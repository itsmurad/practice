const express = require('express');
const { Sequelize } = require('sequelize');
const db = require('../models');

const router = express.Router();
const sequelize = new Sequelize('postgres://rentuser:rentpassword@localhost:5432/rentdb');

router.use(express.json()); // Middleware for parsing JSON request body

router.get('/cars', async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    const cars = await db.Cars.findAll();
    res.json(cars);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    next(error);
  }
});

router.post('/cars', async (req, res, next) => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');

    const { brandName, modelName, seatCapacity, engineCapacity, transmission, fuelType } = req.body; 

    const newCar = await db.Cars.create({
      brandName,
      modelName,
      seatCapacity,
      engineCapacity,
      transmission,
      fuelType
    });

    res.status(201).json(newCar);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    next(error);
  }
});

module.exports = router;
