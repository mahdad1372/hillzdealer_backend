module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mincount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Service;
};
