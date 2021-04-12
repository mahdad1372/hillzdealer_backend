const db = require("../models");
exports.addattach = (req, res) => {
  const names = ["mahdad", "reza", "saman"];
  // db.attach
  //   .create({
  //     attachfile: req.body.attach,
  //     ticketId: req.body.id,
  //   })
  //   .then((x) => res.json(x));
  // console.log(names.length);
  for (i = 0; i < req.body.names.length; i++) {
    db.attach
      .create({
        attachfile: req.body.names[i],
        ticketId: req.body.id,
      })
      .then((x) => res.json(x));
  }
  // console.log(typeof names);
  // console.log(req.body.names);
  // console.log(req.body.id);
  // res.send(req.body.attach);
};
