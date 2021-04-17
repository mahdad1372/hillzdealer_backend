const express = require("express");
const multer = require("multer");
const servicecontrollers = require("../controller/service_controller");
const subscribecontrollers = require("../controller/subscribe_controller");
const aboutuscontrollers = require("../controller/aboutus_controller");
const ticketcontrollers = require("../controller/ticket_controller");
const replycontrollers = require("../controller/reply_ticket_controller");
const product_categorycontrollers = require("../controller/product_category_controller");
const product = require("../controller/product");
const router = express.Router();
const storage = multer.diskStorage({
  destination: "../upload/images",
  filename: (req, file, cb) => {
    return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });
// var uploadmultiplefiles = upload.fields([
//   { name: "image", maxCount: 1 },
//   { name: "icon", maxCount: 1 },
// ]);

router.get("/service", servicecontrollers.getservice);
router.post("/service", servicecontrollers.createservice);
router.put("/service/:id", servicecontrollers.editservice);
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
router.put("/ticket/:id", ticketcontrollers.editticket);
router.post("/ticket", upload.array("files"), ticketcontrollers.addticket);
router.post("/reply", upload.array("files"), replycontrollers.addreplyticket);
router.get("/reply/:id", replycontrollers.getreplyticket);

router.post(
  "/product_category",
  product_categorycontrollers.addproductcategory
);
router.post("/product", product.addproduct);
router.get("/product", product.getproduct);
module.exports = router;
