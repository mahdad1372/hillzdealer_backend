module.exports = (sequelize, DataTypes) => {
  const Faq = sequelize.define("Faq", {
    ask: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return Faq;
};
