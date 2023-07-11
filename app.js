import 'reflect-metadata';
import { plainToClass } from "class-transformer"
import { example } from './controller/example.js';

let json = {
    id: "",
    name: "eduard",
    age: 33
};

let data = plainToClass(example, json, {excludeExtraneousValues: true});
console.log(data)