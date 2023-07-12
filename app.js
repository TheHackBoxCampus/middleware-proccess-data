import express from "express";
import dotenv from "dotenv"; 
import router from "./router/routes.js"; 

// env
dotenv.config(); 
let $server = JSON.parse(process.env.server); 
let app = express(); 

// middleware
app.use(express.json()); 

app.use("/prueba", router);

app.listen($server, () => {
    console.log(`listening http://${$server.hostname}:${$server.port}`); 
})