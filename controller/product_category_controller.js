const db = require("../models");
exports.getproductcategory = (req, res) => {
  db.product_category.findAll().then((x) => res.json(x));
};
exports.addproductcategory = (req, res) => {
  db.product_category
    .create({
      name: req.body.name,
      description: req.body.description,
      image_url: req.body.image_url,
      icon_url: req.body.icon_url,
      is_in_first_page: req.body.is_in_first_page,
      is_it_child: req.body.is_it_child,
      parent_id: req.body.parent_id,
    })
    .then((x) => res.json(x));
};
