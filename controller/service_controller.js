const db = require("../models");

exports.getservice = (req, res) => {
  db.Service.findAll().then((x) => res.json(x));
};
exports.createservice = async (req, res, next) => {
  const titles = await db.Service.findOne({
    where: {
      title: req.body.title,
    },
  });
  if (titles) {
    return res
      .status(422)
      .send({ message: "Service with this title already exists" });
  } else {
    db.Service.create({
      type: req.body.type,
      image: req.files.image[0].path,
      title: req.body.title,
      description: req.body.description,
      number: req.body.number,
      enable: true,
      mincount: req.body.mincount,
      icon: req.files.icon[0].path,
      price: req.body.price,
      default: req.body.default,
      termdays: req.body.termdays,
    })
      .then((x) => res.json(x))
      .catch((err) => res.json(err));
  }
};
exports.editservice = (req, res) => {
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
      db.Service.findAll({
        where: {
          id: req.params.id,
        },
      }).then((todo) =>
        db.Service.create({
          type: req.body.type,
          image: req.files.image[0].path,
          title: req.body.title,
          description: req.body.description,
          number: req.body.number,
          enable: true,
          mincount: req.body.mincount,
          icon: req.files.icon[0].path,
          price: req.body.price,
          default: req.body.default,
          termdays: req.body.termdays,
        }).then(() => res.json("created successfully"))
      )
    )
    .catch((err) => res.json(err));
};
exports.deleteservice = (req, res) => {
  db.Service.destroy({
    where: {
      id: req.params.id,
    },
  }).then((x) => res.json("sucessfully deleted"));
};
