const express = require("express");

//create express app
const app = express();

//port at which the server will run
const port = 4000;

//create end point
app.get("/", (request, response) => {
  response.send("Hi, from Node server");
});
app.get("/EmpData", (request, response) => {
    response.send(req.params);
  });
//start server and listen for the request
app.listen(port, () =>
  console.log(`server is listening at http://localhost:${port}`)
);
