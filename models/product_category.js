module.exports = (sequelize, DataTypes) => {
  const product_category = sequelize.define("product_category", {
    name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    icon_url: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    is_in_first_page: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    is_it_child: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    parent_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
    },
  });
  product_category.associate = (models) => {
    product_category.hasOne(models.product, {
      as: "category",
      foreignKey: "frk_category",
      allowNull: false,
    });
  };
  return product_category;
};
