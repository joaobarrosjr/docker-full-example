var express = require('express');
var session = require('express-session');
var redisStore  = require('connect-redis')(session);
var redis = require("redis");
var client = redis.createClient();
var app = express();

app.use(session({
    secret: 'ssshhhhh',
    store: new redisStore({ host: 'redis', port: 6379, client: client,ttl :  260}),
    saveUninitialized: false,
    resave: false
}));

app.get('/', function (req, res) {
  res.send('Hello World! This is the front app microservice.');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
