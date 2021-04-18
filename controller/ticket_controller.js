const db = require("../models");
exports.getticket = async (req, res) => {
  console.log(req.params.id);
  try {
    const datas = await db.ticket.findAll({
      where: {
        frk_reply: 0,
      },
      order: [["createdAt", req.params.id]],
      include: db.attach,
    });
    res.json({
      data: datas.map((i) => ({
        id: i.id,
        title: i.title,
        name: "mahdad",
        attaches: i.attaches,
        status: i.status,
        unit: i.unit,
        text: i.text,
        number: i.number,
        frk_reply: i.frk_reply,
        createdAt: i.createdAt,
        updatedAt: i.updatedAt,
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
      frk_reply: 0,
      number: 2100000 + ss.length + 1,
      title: req.body.title,
      unit: req.body.unit,
      text: req.body.text,
      status: req.body.status,
    })
    .then((x) => {
      Promise.all(
        req.files.map((itm) => {
          db.attach.create({
            ticketId: x.id,
            attachfile: itm.originalname,
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
exports.editticket = (req, res) => {
  db.ticket
    .update(
      {
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    .then((x) => res.json({ data: "successfully updated", status: 200 }));
};
