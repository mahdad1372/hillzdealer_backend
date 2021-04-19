const db = require("../models");
exports.getproduct = async (req, res) => {
  try {
    const datas = await db.contactus.findAll({});
    res.json(datas);
  } catch (err) {
    res.status(400);
  }
};
exports.addcontactus = async (req, res) => {
  try {
    const contactus = await db.contactus.create({
      f_name: req.body.name,
      f_lastname: req.body.lastname,
      status: req.body.status,
      mobile: req.body.mobile,
      email: req.body.email,
      message: req.body.message,
    });
    res.json(contactus);
  } catch (err) {
    res.json(err);
  }
};
exports.editcontactus = (req, res) => {
  db.contactus
    .update(
      {
        f_name: req.body.name,
        f_lastname: req.body.lastname,
        status: req.body.status,
        mobile: req.body.mobile,
        email: req.body.email,
        message: req.body.message,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json({ data: "successfully updated", status: 200 }));
};
