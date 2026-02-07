import express, { urlencoded } from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express({urlencoded:true}));
app.use(express.static("public"));

app.set("view engine","ejs");
app.set("views",__dirname+"/views");


app.get("/",(req,res) => {
    res.render("index.ejs");
})


app.listen(port,() => {
    console.log(`Server is listening at ${port}`);
})