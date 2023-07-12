import { Expose, Transform } from "class-transformer";

class example {
    @Expose({name: "id"})
    @Transform(({value}) => {
        if(Math.floor(value) && typeof value == "number") { return Math.floor(value) }
        else throw{status: 400, message: "Parametros Incorrectos"}}, {toClassOnly: true})
    ID: number;
    @Expose({name: "name"})
    @Transform(({value}) => {
        if(typeof value == "string") {
            if (value.length > 5) throw {status: 401, message: "Longitud de algunos parametros mayor a la necesitada"}
            else { return value; }
        }else {
            throw {status: 400, message: "Parametros Incorrectos"}
        }
    }, {toClassOnly: true})
    alias: string; 
    @Expose({name: "age"})
    @Transform(({value}) => {
        if(Math.floor(value) && typeof value == "number") { return Math.floor(value) }
        else throw{status: 400, message: "Parametros Incorrectos"}}, {toClassOnly: true})
    old: number;
    constructor(ID: number, alias: string, old: number) {
        this.ID = ID; 
        this.alias = alias;
        this.old = old;
    }
}

export {
    example
}