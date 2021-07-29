import { Injectable } from "@angular/core";
import { GreeterModule } from "./greeter.module";

@Injectable({
    //providedIn: GreeterModule create HelloService with help of Greeter Module injector
    providedIn: 'root' //Hello Service is created by global injector
})
export class HelloService {
    constructor() { }
    //apis
    public sayHello(): string {
        return 'Hello!!!';
    }
}