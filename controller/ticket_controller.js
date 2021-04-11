const db = require("../models");
exports.getticket = (req, res) => {
  db.ticket.findAll().then((x) => res.json(x));
  //   db.ticket.findAll().then((x) => res.json(x));
};
exports.addticket = (req, res) => {
  db.ticket
    .create({
      title: req.body.title,
      unit: req.body.unit,
      text: req.body.text,
    })
    .then((x) => res.json(x));
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
