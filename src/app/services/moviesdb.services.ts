import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



@Injectable({
    providedIn: 'root',
})

export class moviesdbAPIService {
    private apiUrl = 'https://api.themoviedb.org/3/';  

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({
            'Accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOTFjNjE4NmRkMjI2YmU2NDllYTJhODU5MzY4ZjAxNSIsIm5iZiI6MTczODM3MjA1Ni4zOTM5OTk4LCJzdWIiOiI2NzlkNzNkODBkMTlmMzBhYzE5NTJmNmIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UeREwVYYhyMokxQJrE0XTHz0y-A-wcM2x9hN7EQpsOw'
        });
    }

    getMovies(endpoint: string, paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
        }
    }

    
    return this.http.get(`${this.apiUrl}${endpoint}`, { headers: this.headers, params })
    }

}