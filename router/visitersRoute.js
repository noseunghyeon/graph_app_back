const router = require("express").Router();
const visitersRoute = require("../controllers/visitersCtrl");

router.get("/visiters", visitersRoute.getvisiters);

module.exports = router;
