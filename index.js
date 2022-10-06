// Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./data/database");

const CategoriesController = require("./categories/CategoriesController");
const ArticlesController = require("./articles/ArticlesController");

// View engine
app.set("view engine", "ejs");

// Static
app.use(express.static("public"));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Database
connection
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco feita com sucesso!");
  })
  .catch((error) => {
    console.log(error);
  });

// Rotas

app.use("/", CategoriesController);
app.use("/", ArticlesController);

app.get("/", (req, res) => {
  res.render("index");
});

app.listen((port = 8080), () => {
  console.log("O servidor está rodando na porta" + " " + port);
});
