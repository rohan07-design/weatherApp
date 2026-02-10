import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";
require("dotenv").config();


const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const key = process.env.OPENWEATHER_API_KEY;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

//change the image based on weather
function getWeatherIcon(weather) {
  switch (weather) {
    case "Clear":
      return "https://cdn-icons-png.flaticon.com/512/869/869869.png";
    case "Clouds":
      return "https://cdn-icons-png.flaticon.com/512/414/414825.png";
    case "Rain":
      return "https://cdn-icons-png.flaticon.com/512/3313/3313888.png";
    case "Snow":
      return "https://cdn-icons-png.flaticon.com/512/642/642102.png";
    default:
      return "https://cdn-icons-png.flaticon.com/512/1779/1779940.png";
  }
}


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
    icon: "https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
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
  let weatherIcon = getData.data.weather[0].icon;
  let wind = getData.data.wind.speed;
  let huminity = getData.data.main.humidity;

  const iconUrl = `https://openweathermap.org/img/wn/01d@2x.png`;
  console.log(iconUrl);
  
  res.render("index.ejs", {
    city,
    temp,
    weather,
    wind,
    huminity,
    iconUrl,
    icon : getWeatherIcon(weather)
  });
//   city.body = "";
});

app.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
