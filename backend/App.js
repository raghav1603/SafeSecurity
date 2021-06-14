const express = require("express");
//create express app
const app = express();

//port at which the server will run
const port = 4000;
//allow cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.use(express.json());
//   app.use(express.urlencoded());
//create end point
app.get("/", (request, response) => {
  response.send("Hi, from Node server");
});
app.get("/EmpData", (request, response) => {
    console.log(request.params);
    response.send(request.params);
  });
//start server and listen for the request
app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);
