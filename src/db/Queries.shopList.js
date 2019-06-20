const ShopList = require("./models").ShopList;
module.exports = {
  getAllshopLists(callback){
    return ShopList.all()
   .then((shopLists) => {
     callback(null, shopLists);
   })
   .catch((err) => {
     callback(err);
   })
  },
  getShopList(id, callback){

    return ShopList.findById(id)
    .then((shopList) => {
      callback(null, shopList);
    })
    .catch((err) => {
      callback(err);
    })
  },
  addShopList(newShopList, callback){
      return ShopList.create({
        title: newShopList.title,
        description: newShopList.description
      })
      .then((shopList) => {
        callback(null, shopList);
      })
      .catch((err) => {
        callback(err);
      })
    },
  deleteShopList(req, callback){

     return ShopList.findById(req.params.id)
     .then((shopList) => {
       shopList.destroy()
         .then((res) => {
           callback(null, shopList);
         });
     })
     .catch((err) => {
       callback(err);
     });
   },
  updateShopList(req, updatedShopList, callback){
      return ShopList.findById(req.params.id)
      .then((shopList) => {

        if(!shopList){
          return callback("ShopList not found");
        }

          shopList.update(updatedShopList, {
            fields: Object.keys(updatedShopList)
          })
          .then(() => {
            callback(null, shopList);
          })
          .catch((err) => {
            callback(err);
          })
      })
    }
}
