require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const passportConfig = require("./passport-config");
const session = require("express-session");
const expressValidator = require("express-validator");
 module.exports = {
  init(app, express){
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(bodyParser.json());
    app.use(session({
   secret: process.env.cookieSecret,
   resave: false,
   saveUninitialized: false,
    cookie: { maxAge: 1.21e+9 }
 }));
   passportConfig.init(app);
   app.use(expressValidator());

}
}
