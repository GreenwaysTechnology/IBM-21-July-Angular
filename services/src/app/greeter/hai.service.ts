import { Injectable } from "@angular/core";


@Injectable({
    providedIn: 'root'
})
export class HaiService {
    constructor() { }
    //async service: using callbacks
    // public sayHai(action: Function): void {
    //     //timer api to simulate delay
    //     setTimeout(action, 5000, "Hai,I am Delayed")
    // }
    //async servie :using Promises
    public sayHai(): Promise<string> {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 5000, "Hai,I am Delayed")
        })
    }
}