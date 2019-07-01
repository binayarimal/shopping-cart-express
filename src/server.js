const app = require("./app");
const http = require("http");
const port = normalizePort(process.env.PORT || "5000");
const path = require('path');
const express = require('express');
const server = http.createServer(app);
 app.set("port", port);
 server.listen(port);
 


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
