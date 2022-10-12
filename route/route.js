const express = require('express');
const router = express.Router();

const myController = require("../contollers/appControllers")


router.get("/", myController.homeView);
router.get("/about", myController.aboutView);
router.get("/information", myController.infoView);
router.get("/contact", myController.contactView);


module.exports = router;