require("dotenv").config();
const path = require("path");
const bodyParser = require("body-parser");
 module.exports = {
  init(app, express){
    app.use(express.static(path.join(__dirname, "..", "assets")));
    app.use(bodyParser.json());
}
}
