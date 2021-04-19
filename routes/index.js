const express = require("express");
const multer = require("multer");
const servicecontrollers = require("../controller/service_controller");
const subscribecontrollers = require("../controller/subscribe_controller");
const aboutuscontrollers = require("../controller/aboutus_controller");
const ticketcontrollers = require("../controller/ticket_controller");
const replycontrollers = require("../controller/reply_ticket_controller");
const product_categorycontrollers = require("../controller/product_category_controller");
const uploadscontroller = require("../controller/upload_img");
const product = require("../controller/product");
const contactus = require("../controller/contactus_contoller");
const router = express.Router();
const storage = multer.memoryStorage({
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

router.get("/ticket/:id", ticketcontrollers.getticket);
// router.get("/ticket2", ticketcontrollers.getticket2);
router.put("/ticket/:id", ticketcontrollers.editticket);
router.post("/ticket", upload.array("files"), ticketcontrollers.addticket);
router.post("/reply", upload.array("files"), replycontrollers.addreplyticket);
router.post(
  "/upload",
  upload.single("file"),
  uploadscontroller.uploadImageToAzure
);
router.get("/reply/:id", replycontrollers.getreplyticket);

router.post(
  "/product_category",
  upload.fields([
    { name: "image_url", maxCount: 1 },
    { name: "icon_url", maxCount: 1 },
  ]),
  uploadscontroller.uploadImageToAzure2("test"),
  product_categorycontrollers.addproductcategory
);
router.put(
  "/product_category",
  upload.fields([
    { name: "image_url", maxCount: 1 },
    { name: "icon_url", maxCount: 1 },
  ]),
  uploadscontroller.uploadImageToAzure2("test"),
  product_categorycontrollers.editproductcategory
);
router.get("/product_category", product_categorycontrollers.getproductcategory);
router.post(
  "/product",
  upload.single("image_url"),
  uploadscontroller.uploadImageToAzure("test"),
  product.addproduct
);
router.get("/product", product.getproduct);
router.post("/contactus", contactus.addcontactus);
router.put("/contactus/:id", contactus.editcontactus);
router.get("/contactus", contactus.getproduct);
module.exports = router;
