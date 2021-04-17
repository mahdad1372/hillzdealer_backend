const db = require("../models");
exports.getticket = async (req, res) => {
  try {
    const names = await db.ticket.findAll({
      include: db.attach,
    });
    res.json({
      data: names.map((i) => ({
        id: i.id,
        title: i.title,
        name: "mahdad",
        attaches: i.attaches.map((i) => i.attachfile),
        status: i.status,
        unit: i.unit,
        text: i.text,
      })),
      status: 200,
    });
  } catch (err) {
    res.status(400);
  }
};
exports.addticket = async (req, res) => {
  const ss = await db.ticket.findAll();
  db.ticket
    .create({
      // frk_reply: 0,
      // reply: "",
      // number: id,
      number: 2100000 + ss.length + 1,
      title: req.body.title,
      unit: req.body.unit,
      text: req.body.text,
      status: req.body.status,
    })
    .then((x) => {
      Promise.all(
        req.body.files.map((itm) => {
          db.attach.create({
            ticketId: x.id,
            attachfile: itm,
          });
        })
      ).then((x) =>
        res.status(200).json({ data: "succsessfully created", status: 200 })
      );
    })
    .catch((err) => {
      res.status(400).json({ status: 400 });
    });
};
