import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.use(express.static("public"))

app.engine("hbs", exphbs.engine({
    extname: ".hbs"
}));
app.set("view engine", ".hbs");

// Routing
app.get("/", (req, res) => {
  res.render("index", {title: "home"});
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about",
    style: "about.css"
});
});

app.get("/names", (req, res) => {
  res.render("names", {
    style: "names.css",
    name: "Mariano",
    age: 22,
    country: "argentina",
    isDisplayName: false,
    loggedIn: false
    });
});

app.get("/each/contact", (req, res)=>{
    res.render("contacts", {
        people: [
            "Jon",
            "Mariano",
            "Lucas",
            "Maria"
        ],
        user: {
            name: "mariano",
            age: 22,
            country: "argentina"
        },
        arrayUno: [
            { 
                names1 : ["mariano", "coscu", "lucas"]
            },
            { 
                names1 : ["maria", "marcelo", "rodrigo"]
            },
        ],
        arrayDos: [
            { 
                names1 : {
                    name: "mariano",
                    age: 22,
                    country: "argentina"
                }
            },
            { 
                names1 : {
                    name: "marcela",
                    age: 25,
                    country: "alemania"
                }
            },
        ],
        style: "contact.css",

    })
})

app.get("/look", (req, res)=>{
    res.render("look", {
        style: "look.css",
        user: {
            name: "mariano123",
            age: 20,
            adress: "kahghsdasaA"
        },
        contact: [
            "contactOne",
            "contactTwo",
            "contactThree",
        ],
        datos: {
            nombre: "Juan",
            direccion: {
              calle: "123 Calle Principal",
              ciudad: "Ciudad de México"
            }
        }
    })
})

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
