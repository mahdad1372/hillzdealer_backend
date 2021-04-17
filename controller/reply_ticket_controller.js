const db = require("../models");
exports.getreplyticket = async (req, res) => {
  try {
    const datas = await db.ticket.findAll({
      where: {
        frk_reply: req.params.id,
      },
      include: db.attach,
    });
    res.json({
      data: datas.map((i) => ({
        id: i.id,
        title: i.title,
        name: "mahdad",
        frk_reply: i.frk_reply,
        attaches: i.attaches,
        status: i.status,
        unit: i.unit,
        text: i.text,
        number: i.number,
        createdAt: i.createdAt,
        updatedAt: i.updatedAt,
      })),
      status: 200,
    });
  } catch (err) {
    res.status(400);
  }
};
exports.addreplyticket = async (req, res) => {
  db.ticket
    .create({
      title: "",
      unit: "",
      number: 0,
      frk_reply: req.body.id,
      text: req.body.text,
      status: 2,
    })
    .then((x) => {
      Promise.all(
        req.files.map((itm) => {
          db.attach.create({
            ticketId: x.id,
            attachfile: itm.originalname,
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
