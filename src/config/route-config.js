module.exports = {
  init(app){
    const shopListRoutes = require("../routes/shopList");
    app.use(shopListRoutes);

}
}
