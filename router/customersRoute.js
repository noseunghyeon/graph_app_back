const router = require("express").Router();
const customersRoute = require("../controllers/customersCtrl");

router.get("/customers", customersRoute.getcustomers);

module.exports = router;
