import { Injectable } from "@angular/core";
import { from, Observable, of, range } from "rxjs";
import { filter, first, map, take, delay, tap } from 'rxjs/operators'


@Injectable({
    providedIn: 'root'
})
export class NumberStreamService {

    constructor() {

    }
    //sending stream of numbers
    public getNumbers(): Observable<number> {
        //return of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        // const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // return from(array);
        return range(1, 1000).pipe(
            tap(() => console.log('called')),
            map(item => {
                console.log(`map is called for ${item}`)
                return item * 2
            }),
            //take(20),
            delay(1000),
            filter(item => item > 20)
        );
    }

}