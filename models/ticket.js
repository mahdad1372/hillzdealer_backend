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
    number: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  ticket.associate = (models) => {
    ticket.hasMany(models.attach, {
      foreignKey: {
        allowNull: false,
      },
    });
  };

  return ticket;
};
