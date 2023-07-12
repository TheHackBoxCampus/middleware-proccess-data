import express from "express"; 
import 'reflect-metadata';
import { plainToClass } from "class-transformer"
import { example } from '../controller/example.js';

let security = express(); 

security.use((req, res, next) => {
    try {
        let data = plainToClass(example, req.body);
        req.body = JSON.parse(JSON.stringify(data)); 
        next(); 
    } catch(err) {
        res.status(500).send(err); 
    }
})

export default security;  