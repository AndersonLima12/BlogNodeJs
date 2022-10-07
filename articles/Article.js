const Sequelize = require("sequelize");
const connection = require("../data/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  body: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

Category.hasMany(Article); // hasMany = tem muitos. Relacionamento 1 para muitos
Article.belongsTo(Category); // belongsTo = pertence a. Relacionamento 1 para 1

// Article.sync({ force: true });

module.exports = Article;
