const db = require("../models");
exports.getproductcategory = (req, res) => {
  db.product_category.findAll().then((x) => res.json(x));
};
exports.addproductcategory = async (req, res) => {
  console.log(req.body);
  // res.json(
  //   Promise.all(
  //     req.files.map((itm) => {
  //       db.attach.create({
  //         ticketId: x.id,
  //         attachfile: itm.originalname,
  //       });
  //     })
  //   )
  // );

  try {
    const product_category = await db.product_category.create({
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_file1,
      icon_url: req.body.image_file2,
      is_in_first_page: req.body.is_in_first_page,
      is_it_child: req.body.is_it_child,
      parent_id: req.body.parent_id,
    });
    res.json(product_category);
  } catch (err) {
    res.json(err);
  }
};
