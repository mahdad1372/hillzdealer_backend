const db = require("../models");
exports.getreplyticket = (req, res) => {
  db.ticket
    .findAll({
      where: {
        frk_reply: req.query.id,
      },
      include: db.attach,
    })
    .then((x) => res.json({ data: x, status: 200 }));
};
exports.addreplyticket = (req, res) => {
  db.ticket
    .create({
      title: "",
      unit: "",
      number: 0,
      frk_reply: req.body.id,
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
      );
      res.json({ data: x, status: 200 });
      // .then((x) => {
      //   res.json(x);
      // });
    })
    .catch((err) => res.status(400).json({ status: 400 }));
};
