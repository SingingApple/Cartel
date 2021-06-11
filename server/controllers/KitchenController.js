
const Kitchen = require('../models/Kitchen')


module.exports.getAllKitchens = async (req, res) => {
    try {
        const kitchens = await Kitchen.find()
        return res.status(200).json(kitchens);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Server Error");
    }
}



module.exports.getKitchenById = async (req, res) => {
    try {
        const kitchen = await Kitchen.findOne({
            _id: req.params.kitchenId,
        })
        return res.json(kitchen);
    } catch (error) {
        if (error.kind === "ObjectId") {
            return res.status(404).json({
                msg: "Kitchen not found",
            });
        }
        res.status(500).send("Server Error");
    }
}


module.exports.createKitchen = async (req, res) => {
    try {
        const newKitchen = await Kitchen.create(req.body);
        await newKitchen.save();
        return res.status(200).json(newKitchen)
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Server Error");
    }
}

module.exports.editKitchen = async (req, res) => {

    try {
        console.log(req.params);
        const newKitchen = await Kitchen.findByIdAndUpdate(req.params.kitchenId, req.body, { new: true });
        console.log(newKitchen);
        await newKitchen.save();
        return res.status(200).json(newKitchen)
    } catch (error) {
        console.log(error.message);
        return res.status(500).send("Server Error");
    }
}