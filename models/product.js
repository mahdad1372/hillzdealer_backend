module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
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
    is_in_first_page: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });
  product.associate = (models) => {
    product.belongsTo(models.product_category, {
      foreignKey: "frk_category",
    });
  };

  return product;
};
