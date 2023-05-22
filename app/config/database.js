const Sequelize = require("sequelize");

const sequelize = new Sequelize("alkademi_db", "root", "AndikaEka_102", {
  host: "localhost",
  dialect: "mysql"
});

async function databaseConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  }
}
databaseConnection();

module.exports = sequelize;
