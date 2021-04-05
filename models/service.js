module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define("Service", {
    type: {
      type: DataTypes.TEXT("tiny"),
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    number: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    enable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mincount: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    icon: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    default: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    termdays: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });
  return Service;
};
