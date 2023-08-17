import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

function loggere(req, res, next){
  console.log("Request Method ", req.method);
  console.log("Request URL ", req.url);
  next();
}

app.use(loggere);

app.use(morgan("common"));

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/submit' , (req , res)=>{
  console.log(req.body);
})

app.get("/index", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
