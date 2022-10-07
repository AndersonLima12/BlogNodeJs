const Sequelize = require("sequelize");
const connection = require("../data/database");

const Category = connection.define("categories", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Cria tabela no banco de dados

// Category.sync({ force: true });

module.exports = Category;
