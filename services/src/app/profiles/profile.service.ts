import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { PROFILES } from "../mock-data/profiles";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    constructor() {

    }
    public findAll(): Array<any> {
        return PROFILES;
    }

    public getProfileStream(): Observable<Array<any>> {
        return of(PROFILES).pipe(delay(5000));
    }
}