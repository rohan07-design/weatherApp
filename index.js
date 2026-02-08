import express from "express";
import axios from "axios";
import {dirname} from "path";
import { fileURLToPath } from "url";
import { nextTick } from "process";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));
const key = "5531cc6cf2d4943264880a06793be118";

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views",__dirname+"/views");


app.get("/",(req,res) => {
    res.render("index.ejs");
})

app.post("/",async (req,res) => {
    let city = req.body.city;
    let getData = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`);
    //console.log(getData.data);
    let temp = getData.data.main.temp;
    let weather = getData.data.weather.main;
    let wind = getData.data.wind.speed;
    let humidity = getData.data.main.humidity;
    console.log("temperature is "+temp);
    console.log("weather is "+weather);
    console.log("wind is "+wind);
    console.log("huminity is "+humidity);
    
})


app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
})