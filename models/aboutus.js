module.exports = (sequelize, DataTypes) => {
  const aboutus = sequelize.define("aboutus", {
    video_url: {
      type: DataTypes.CHAR(255),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
  return aboutus;
};
