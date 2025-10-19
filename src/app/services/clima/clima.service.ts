import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
   providedIn: 'root'
})
export class ClimaService {

   private rota = "https://api.hgbrasil.com/weather?woeid=455866";

   constructor(private http: HttpClient) { }

   getClima(): Observable<any> {
      return this.http.get(this.rota)
   }
}
