const express = require('express');
const Connect = require('./db/Connections');
const { sequelize, Sequelize } = require('./models');
const app = express();
const port = 3000;

const carsRouter = require('./routers/car')

Connect()

app.use(express.json())

app.get('', (req, res) => res.send('Hello World!'));

app.use(carsRouter);

app.listen(port, () => console.log(`Express app running on port ${port}!`));
