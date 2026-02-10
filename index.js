import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { nextTick } from "process";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const key = "5531cc6cf2d4943264880a06793be118";

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.get("/", (req, res) => {
  let city = "Pune";
  let temp = "26";
  let weather = "Sunny";
  let wind = "12";
  let huminity = "65";
  res.render("index.ejs", {
    city,
    temp,
    weather,
    wind,
    huminity,
  });
});

app.post("/", async (req, res) => {
  let city = req.body.city;
  let getData = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
  );
  console.log(getData.data);

  let temp = (getData.data.main.temp-273.15).toFixed(2);
  let weather = getData.data.weather[0].main;
  let wind = getData.data.wind.speed;
  let huminity = getData.data.main.humidity;
  
  res.render("index.ejs", {
    city,
    temp,
    weather,
    wind,
    huminity
  });
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
