const db = require("../models");
exports.getproduct = async (req, res) => {
  try {
    const datas = await db.product.findAll({
      include: db.product_category,
    });
    res.json(datas);
  } catch (err) {
    res.status(400);
  }
};
exports.addproduct = (req, res) => {
  db.product
    .create({
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_url,
      is_in_first_page: req.body.is_in_first_page,
      frk_category: req.body.frk_category,
    })
    .then((x) => res.json(x));
};
