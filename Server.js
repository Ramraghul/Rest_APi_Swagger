require('./src/Config/Config');
const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const {swaggerSpec} = require('./src/Swagger/api_Doc');

// Middleware
app.use(express.json());

// Routes
app.use('/v1', require('./src/Routers/User_Route'));
app.use('/api_doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


const port = 7000;
app.listen(port, () => {
  console.log('Server running on Port ' + port);
});
