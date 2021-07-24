const express = require("express");
const router = express.Router();

const controller = require("../controllers/travelsControllers");

router.get("/travels", controller.getAllTravels);
router.get("/travel/:id", controller.getTravelById);

router.post("/travel/:id/passenger/create", controller.createPeople);

router.delete("/passenger/:id", controller.deletePerson);

router.put("/passenger/:id/update", controller.updatePeople);

router.patch("/passenger/:id/updateName", controller.updateName);

router.post("/travel/:id/Driver/create", controller.createDriver);

router.patch("/travel/updatedriverInfos/:id", controller.updatedriverInfos);

router.put("/travel/:id/modifydriverInfos", controller.modifydriverInfos);

router.delete("/travel/:id", controller.deleteTravel)

module.exports = router;