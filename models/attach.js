module.exports = (sequelize, DataTypes) => {
  const attach = sequelize.define("attach", {
    attachfile: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });

  attach.associate = (models) => {
    attach.belongsTo(models.ticket, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return attach;
};
