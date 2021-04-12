module.exports = (sequelize, DataTypes) => {
  const subscribe = sequelize.define("subscribe", {
    firstname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });

  // subscribe.associate = (models) => {
  //   subscribe.belongsTo(models.ticket, {
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return subscribe;
};
