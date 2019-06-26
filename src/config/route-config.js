module.exports = {
  init(app){
    const shopListRoutes = require("../routes/shopList");
      const itemsRoutes = require("../routes/items");
    app.use(shopListRoutes);
    app.use(itemsRoutes);

}
}
