import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Routing
app.get("/", (req, res) => {
  res.render("vista");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
