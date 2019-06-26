const express = require("express");
const router = express.Router();

const itemsController = require("../controllers/itemsController.js")
router.get("/ShopList/:id", itemsController.show);
router.post("/ShopList/:id/create", itemsController.create);
router.post("/ShopList/:id/items/:id/delete", itemsController.destroy);
router.post("/ShopList/:id/items/:id/mark", itemsController.mark);
router.post("/ShopList/:id/items/:id/unMark", itemsController.unMark);

module.exports = router;
