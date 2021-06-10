const express = require('express');
const { getKitchenById, createKitchen, getAllKitchens } = require('../controllers/KitchenController');
const router = express.Router();



router.get("/", getAllKitchens);



router.get("/:post_id", getKitchenById);


router.post('/new', createKitchen);

module.exports = router;