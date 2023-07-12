import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

// Routing
app.get("/", (req, res) => {
  res.render("index", {title: "home"});
});

app.get("/about", (req, res) => {
  res.render("about", {title: "about"});
});

app.get("/names", (req, res) => {
  res.render("names", {
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
        ]

    })
})

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
