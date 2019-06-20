const express = require("express");
const router = express.Router();

const shopListController = require("../controllers/shopListController.js")

router.post("/shopList/create", shopListController.create);
router.post("/shopList/:id/update", shopListController.update);
router.post("/shopList/:id/delete", shopListController.destroy);
module.exports = router;
