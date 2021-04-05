const express = require("express");
const router = express.Router();
const db = require("../models");
const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: "./upload/images",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage: storage,
  //   limits: {
  //     fileSize: 10,
  //   },
});
var uploadmultiplefiles = upload.fields([
  { name: "image", maxCount: 1 },
  { name: "icon", maxCount: 1 },
]);
router.get("/all", (req, res) => {
  db.Todo.findAll().then((x) => res.json(x));
});
router.get("/find/:id", (req, res) => {
  db.Todo.findAll({
    where: {
      id: req.params.id,
    },
  }).then((x) => res.json(x));
});
router.delete("/delete/:id", (req, res) => {
  db.Todo.destroy({
    where: {
      id: req.params.id,
    },
    w,
  }).then((x) => res.json("sucessfully deleted"));
});
router.put("/update/:id", (req, res) => {
  db.Todo.update(
    { text: req.body.text },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((x) => res.json("sucessfully update"));
});
router.post("/new", (req, res) => {
  db.Todo.create({
    text: req.body.text,
  }).then((x) => res.json(x));
});
router.post("/subscribe/new", (req, res) => {
  db.subscribe
    .create({
      full_name: req.body.full_name,
      email: req.body.email,
      mobile: req.body.mobile,
      status: 0,
    })
    .then((x) => res.json(x));
});
router.put("/subscribe/update/:id", (req, res) => {
  db.subscribe
    .update(
      {
        full_name: req.body.full_name,
        email: req.body.email,
        mobile: req.body.mobile,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json("sucessfully update"));
});

router.put("/subscribe/visit/:id", (req, res) => {
  db.subscribe
    .update(
      {
        status: 1,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json("sucessfully visited"));
});
router.delete("/subscribe/delete/:id", (req, res) => {
  db.subscribe
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((x) => res.json("sucessfully deleted"));
});
router.post("/service", uploadmultiplefiles, (req, res, next) => {
  console.log(req.files.image[0].path);
  db.Service.create({
    type: req.body.type,
    image: req.files.image[0].path,
    title: req.body.title,
    description: req.body.description,
    number: req.body.number,
    enable: req.body.enable,
    mincount: req.body.mincount,
    icon: req.files.icon[0].path,
    price: req.body.price,
    default: req.body.default,
    termdays: req.body.termdays,
  })
    .then((x) => res.json(x))
    .catch((err) => res.json(err));
});
router.put("/service/:id", upload.single("image"), (req, res) => {
  db.Service.update(
    {
      enable: false,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
    .then(() =>
      db.Service.create({
        type: req.body.type,
        image: req.file.path,
        title: req.body.title,
        description: req.body.description,
        number: req.body.number,
        enable: req.body.enable,
        mincount: req.body.mincount,
      }).then(() => res.json("created successfully"))
    )
    .catch((err) => res.json(err));
});
router.delete("/service/delete/:id", (req, res) => {
  db.Service.destroy({
    where: {
      id: req.params.id,
    },
  }).then((x) => res.json("sucessfully deleted"));
});
router.get("/service", (req, res) => {
  db.Service.findAll().then((x) => res.json(x));
});
module.exports = router;
