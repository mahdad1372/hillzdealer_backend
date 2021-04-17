const express = require("express");
const app = express();
const db = require("./models");
const PORT = process.env.PORT || 8000;
app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PATCH,POST,DELETE");
  res.append("Access-Control-Allow-Headers", ["*"]);
  next();
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// const apiRoutes = require("./routes/apiroutes");
const apiRoutes = require("./routes/index");

app.use("/", apiRoutes);

db.sequelize.sync().then(() => {
  // app.listen(PORT, "192.168.1.101", () => {
  //   console.log(`listening on: http://localhost:${PORT}`);
  // });
  app.listen(PORT, "192.168.1.101");
});
