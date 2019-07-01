const app = require("./app");
const http = require("http");
const port = normalizePort(process.env.PORT || "5000");
const path = require('path');
const express = require('express');
const server = http.createServer(app);
 app.set("port", port);
 server.listen(port);
 app.use(express.static(path.join(__dirname, 'client/build')))
 app.get('*', (req, res) => {
   res.sendFile(path.join(__dirname + '/client/build/index.html'))
 })


 function normalizePort(val) {
   const port = parseInt(val, 10);
   if (isNaN(port)) {
     return val;
   }
   if (port >= 0) {
     return port;
   }
   return false;
 }



server.on("listening", () => {
  console.log(`server is listening for requests on port ${server.address().port}`);
   });
