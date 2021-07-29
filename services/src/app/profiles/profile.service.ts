import { Injectable } from "@angular/core";
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
}