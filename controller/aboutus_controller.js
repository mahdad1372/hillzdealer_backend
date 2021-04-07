const db = require("../models");
exports.getaboutus = (req, res) => {
  db.aboutus.findAll().then((x) => res.json(x));
};
exports.addaboutus = (req, res) => {
  db.aboutus
    .create({
      video_url: req.body.video_url,
      description: req.body.description,
    })
    .then((x) => res.json(x));
};
exports.editaboutus = (req, res) => {
  db.aboutus
    .update(
      {
        video_url: req.body.video_url,
        description: req.body.description,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json("sucessfully update"));
};
exports.deleteaboutus = (req, res) => {
  db.aboutus
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((x) => res.json("sucessfully deleted"));
};
