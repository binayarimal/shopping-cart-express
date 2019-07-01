require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
const passportConfig = require("./passport-config");
const session = require("express-session");
const expressValidator = require("express-validator");
const viewsFolder = path.join(__dirname, "..", "public");


 module.exports = {
  init(app, express){

    app.set("views", viewsFolder);
    app.set("view engine", "ejs");
  app.use(express.static(path.join(__dirname,"..", 'client/build')))
    app.use(bodyParser.json());
    app.use(session({
   secret: process.env.cookieSecret,
   resave: false,
   saveUninitialized: false,
    cookie: { maxAge: 1.21e+9 }
 }));
   passportConfig.init(app);
   app.use(expressValidator());
   app.get('*', (req,res) =>{
       res.sendFile(path.join(__dirname+'/client/build/index.html'));
   });

}
}
