import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { HttpClient } from "@angular/common/http";

@Injectable()

export class DigimonesServices {
    private API_SERVER = "http://localhost:3001/api/digimons";

    constructor(public http:HttpClient) {}

    //obtiene todos los digimos
    public getDigimones(): Observable<any>{
        return this.http.get(this.API_SERVER);
    }

    //obtiene una lista de digimons por nivel
    public postDigimonesForLevel(level:string): Observable<any>{
        return this.http.post(`${this.API_SERVER}/level`, {"level": level});
    }
}