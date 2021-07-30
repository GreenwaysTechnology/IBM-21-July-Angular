import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";



@Injectable({
    providedIn: 'root'
})
export class ConfigService {

    configUrl = 'assets/config.json';
    constructor(private http: HttpClient) { }
    //
    public getConfig() {
        return this.http.get<any>(this.configUrl);
    }
}