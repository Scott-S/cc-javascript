var cors = require('cors');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var routes = require('./routes/codeChallengeRoutes'); //importing route
var corsOptions;

//uncomment this option to allow CORS from zesty.engineering exclusively
//corsOptions = {
//    origin: 'http://zesty.engineering.com',
//    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
//};

//set CORS headers
app.use(cors(corsOptions));

app.use(routes);
app.listen(port);

console.log('API server started on: ' + port);
