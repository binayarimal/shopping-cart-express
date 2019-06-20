const shopListQueries = require("../db/Queries.shopList.js");
module.exports = {
  create(req, res, next){
    let newShopList = {
      name: req.body.name,
      description:req.body.description
    };
    shopListQueries.addShopList(newShopList, (err, shopList) => {
      if(err){
        res.redirect(500, "shopLists/new");
      } else {
        res.redirect(303, `/shopLists/${shopList.id}`);
      }
    })
  },

  destroy(req, res, next){
    shopListQueries.deleteShopList(req, (err, shopList) => {
      if(err){
        res.redirect(err, `/shopLists/${req.params.id}`)
      } else {
        res.redirect(303, "/shopLists")
      }
    })
  },

    update(req, res, next){

      shopListQueries.updateShopList(req, req.body, (err, shopList) => {
        if(err || shopList == null){
          res.redirect(401, `/shopLists/${req.params.id}/edit`);
        } else {
          res.redirect(`/shopLists/${req.params.id}`);
        }
      });
    }
  }
