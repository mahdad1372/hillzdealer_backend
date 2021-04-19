const db = require("../models");
exports.getproduct = async (req, res) => {
  try {
    const datas = await db.product.findAll({
      include: db.product_category,
    });
    res.json({ data: datas, status: 200 });
  } catch (err) {
    res.status(400);
  }
};
exports.addproduct = async (req, res) => {
  try {
    const product = await db.product.create({
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_file,
      is_in_first_page: req.body.is_in_first_page,
      frk_category: req.body.frk_category,
    });
    res.json({ data: product, status: 200 });
  } catch (err) {
    res.json(err);
  }
};
