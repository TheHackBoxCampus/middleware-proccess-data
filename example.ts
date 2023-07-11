import { Expose, Transform, Type} from "class-transformer";

class example {
    @Expose({name: "id"})
    @Transform(({value}) => parseInt(value), {toClassOnly: true})
    ID: number;
    @Expose({name: "name"})
    @Type(() => String)
    alias: string; 
    @Expose({name: "age"})
    @Transform(({value}) => parseInt(value), {toClassOnly: true})
    old: number;
    constructor(ID: number, alias: string, old: number) {
        this.ID = ID; 
        this.alias = alias;
        this.old = old;
    }

    get message():string {
        return this.ID + " " + this.alias + " " + this.old; 
    }
}

export {
    example
}