const express = require('express');
const { getKitchenById, createKitchen, editKitchen, getAllKitchens } = require('../controllers/KitchenController');
const router = express.Router();



router.get("/", getAllKitchens);

router.get("/:kitchenId", getKitchenById);

router.patch('/:kitchenId', editKitchen);


router.post('/new', createKitchen);

module.exports = router;