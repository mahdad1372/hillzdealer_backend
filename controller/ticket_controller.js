const db = require("../models");
exports.getticket = (req, res) => {
  // db.attach
  //   .findAll({
  //     include: [db.ticket],
  //   })

  //   .then((x) => {
  //     res.json(x);
  //     res.json({ names: x.map((i) => i.attachfile), old: 4 });
  //     res.json(x.map((i) => i.attachfile));
  //     res.json(x[0].attachfile);
  //   });
  db.ticket.findAll().then((x) => res.json(x));
  //   db.ticket.findAll().then((x) => res.json(x));
  // attachfile
};
exports.addticket = (req, res) => {
  db.ticket
    .create({
      title: req.body.title,
      unit: req.body.unit,
      text: req.body.text,
    })
    .then((x) => {
      for (i = 0; i < req.body.names.length; i++) {
        db.attach
          .create({
            attachfile: req.body.names[i],
            ticketId: x.id,
          })
          .then((x) => res.json(x));
      }
    });
};
//   const titles = await db.Service.findOne({
//     where: {
//       title: req.body.title,
//     },
//   });
// exports.replyticket = async (req, res) => {
//   const ids = await db.ticket.findOne({
//     where: {
//       id: req.body.id,
//     },
//   });
//   res.json({ ids });
// };
