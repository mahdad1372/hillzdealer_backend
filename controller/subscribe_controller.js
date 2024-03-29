const db = require("../models");
exports.getsubscribe = (req, res) => {
  db.subscribe.findAll().then((x) => res.json(x));
};
exports.addsubscribe = (req, res) => {
  db.subscribe
    .create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      mobile: req.body.mobile,
      status: req.body.status,
    })
    .then((x) => res.status(200).json({ data: x, status: 200 }))
    .catch((x) => res.status(400).json({ status: 400 }));
};
exports.editsubscribe = (req, res) => {
  db.subscribe
    .update(
      {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        mobile: req.body.mobile,
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json("sucessfully update"));
};
exports.deletesubscribe = (req, res) => {
  db.subscribe
    .destroy({
      where: {
        id: req.params.id,
      },
    })
    .then((x) => res.json("sucessfully deleted"));
};
