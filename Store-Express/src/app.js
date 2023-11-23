import express from "express";
import config from "./config";
import path from "path";
import playerasRoutes from "./routes/playeras.routes";
import appToken from "./routes/appToken.routes";
import unity from "./routes/unity.routes"

const app = express();

//settings
app.set("port", config.port);
app.set("views", "./src/views");
app.set("view engine", "ejs");

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static files
app.use(express.static("public"));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/img", express.static(path.join(__dirname, "public/img")));

/**************SERVIDOR UNITY******************** */
app.use(unity);
/***********************************************  */

app.use(playerasRoutes);

app.use(appToken);

app.use("/", (req, res, next) => {
  res.render("server", {
    title: "Server",
  });
  next();
});

export default app;
