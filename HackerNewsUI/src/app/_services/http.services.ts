import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  actionUrl: string ='http://localhost:5205/api/';
  constructor(private http: HttpClient) {

  }
  public getAll<T>(apiUrl: string): Observable<T> {
    return this.http.get<T>(this.actionUrl + apiUrl);
  }
}
