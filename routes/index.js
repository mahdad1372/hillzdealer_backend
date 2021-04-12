const express = require("express");
const multer = require("multer");
const servicecontrollers = require("../controller/service_controller");
const subscribecontrollers = require("../controller/subscribe_controller");
const aboutuscontrollers = require("../controller/aboutus_controller");
const ticketcontrollers = require("../controller/ticket_controller");
const attachcontroller = require("../controller/attach.controller");
const router = express.Router();
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
var uploadmultiplefiles = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "icon", maxCount: 1 },
]);
router.get("/service", servicecontrollers.getservice);
router.post("/service", uploadmultiplefiles, servicecontrollers.createservice);
router.put("/service/:id", uploadmultiplefiles, servicecontrollers.editservice);
router.delete("/service/:id", servicecontrollers.deleteservice);

router.get("/subscribe", subscribecontrollers.getsubscribe);
router.post("/subscribe", subscribecontrollers.addsubscribe);
router.put("/subscribe/:id", subscribecontrollers.editsubscribe);
router.delete("/subscribe/:id", subscribecontrollers.deletesubscribe);

router.get("/aboutus", aboutuscontrollers.getaboutus);
router.post("/aboutus", aboutuscontrollers.addaboutus);
router.put("/aboutus/:id", aboutuscontrollers.editaboutus);
router.delete("/aboutus/:id", aboutuscontrollers.deleteaboutus);

router.get("/ticket", ticketcontrollers.getticket);
router.post("/ticket", ticketcontrollers.addticket);
router.post("/attach", attachcontroller.addattach);
// router.get("/reply", ticketcontrollers.replyticket);
// router.put("/ticket/:id", aboutuscontrollers.editaboutus);
// router.delete("/ticket/:id", aboutuscontrollers.deleteaboutus);
module.exports = router;
