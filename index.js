const express = require("express");
const morgan = require("morgan");
const apiRouter = require("./routes");
const bodyParser = require("body-parser");
//Instancia Express
const app = express();

app.use((req, res, next) => {
  res.header("Acces-Control-Allow-Origin", "*");
  res.header(
    "Acces-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Acces-Control-Allow-Methods: GET, POST, DELETE");
  next();
});

//Middleware morgan para detectar peticiones
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Primera ruta
app.use("/api", apiRouter);

app.set("port", 3000);

app.listen(app.get("port"), () => {
  console.log("server up");
});
