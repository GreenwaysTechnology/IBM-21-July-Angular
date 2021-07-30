import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { buffer, filter, map } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class NumberStreamService {

    constructor() {

    }
    //sending stream of numbers
    public getNumbers(): Observable<number> {
        return of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(
            map(item => {
                console.log(`map is called ${item}`)
                return item * 3; //transform it
            }),
            filter(item => item > 10)
        );
    }

    //sending array as output
    public getArray(): Observable<Array<number>> {
        const list = [1, 2, 3, 4, 5, 6, 7, 8];
        return of(list);

    }



}