import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Hero } from "../types/hero";

@Injectable({
    providedIn: 'root'
})
export class HeroService {

    constructor(private http: HttpClient) { }
    findAll(): Observable<Array<Hero>> {
        //communicate with REST API server and get data , return to component
        const url = 'http://localhost:3000/heroes';
        return this.http.get<Hero[]>(url);
    }
}