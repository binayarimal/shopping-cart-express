const shopListQueries = require("../db/Queries.shopList.js");
module.exports = {
  show (req, res, next){
    shopListQueries.getAllshopLists((err, shopLists)=>{
      if(err){
        res.send(err);
      } else {
        res.json(shopLists);
      }
    })
  },
  create(req, res, next){
    let newShopList = {
      name: req.body.name,
      description:req.body.description
    };
    shopListQueries.addShopList(newShopList, (err, shopList) => {
      if(err){
        res.send(err);
      } else {
        res.send("success");
      }
    })
  },

  destroy(req, res, next){
    shopListQueries.deleteShopList(req.params.id, (err, shopList) => {
      if(err){
        res.json(err);
      } else {
        res.json("success")
      }
    })
  },

    update(req, res, next){

      shopListQueries.updateShopList(req, req.body, (err, shopList) => {
        if(err || shopList == null){
          res.send(err);
        } else {
          res.json("success");
        }
      });
    }
  }
