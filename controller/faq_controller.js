const db = require("../models");
exports.getfaq = async (req, res) => {
  try {
    const datas = await db.Faq.findAll({});
    res.json(datas);
  } catch (err) {
    res.status(400);
  }
};
exports.addfaq = async (req, res) => {
  try {
    const contactus = await db.Faq.create({
      ask: req.body.ask,
      answer: req.body.answer,
    });
    res.json(contactus);
  } catch (err) {
    res.json(err);
  }
};
exports.editfaq = (req, res) => {
  db.Faq.update(
    {
      ask: req.body.ask,
      answer: req.body.answer,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  ).then((x) => res.json({ data: "successfully updated", status: 200 }));
};
