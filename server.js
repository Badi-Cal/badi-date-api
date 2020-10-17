'use strict';

const express = require('express'),
  bodyParser = require('body-parser'),
  RateLimit = require('express-rate-limit');

const routes = require('./api/routes/bDateRoutes'); // importing route

const config = require('./config').default;

const app = express(),
  port = process.argv[2] || config.port,
  host = process.argv[3] || config.host;

app.use(new RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 20
}));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app); // register the route

app.listen(port, host);

// eslint-disable-next-line no-console
console.log(`Baha\'i Date RESTful API server started: Host ${host}, Port ${port}`);