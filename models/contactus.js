module.exports = (sequelize, DataTypes) => {
  const contactus = sequelize.define("contactus", {
    f_name: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    f_lastname: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },

    status: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    email: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return contactus;
};
