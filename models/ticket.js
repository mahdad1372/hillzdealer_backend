module.exports = (sequelize, DataTypes) => {
  const ticket = sequelize.define("ticket", {
    title: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    unit: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    frk_reply: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reply: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  });

  // ticket.associate = (models) => {
  //   ticket.belongsTo(models.subscribe, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return ticket;
};
