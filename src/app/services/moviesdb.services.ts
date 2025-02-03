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

    getMovies(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        } 
    return this.http.get<any>(`${this.apiUrl}discover/movie`, { headers: this.headers, params });
    }

    getTvShows(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        }    
    return this.http.get<any>(`${this.apiUrl}discover/tv`, { headers: this.headers, params });
    }

    getNowPlaying(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        }
    return this.http.get<any>(`${this.apiUrl}movie/now_playing`, { headers: this.headers, params });
    }

    getPopularMovies(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        }
    return this.http.get<any>(`${this.apiUrl}movie/popular`, { headers: this.headers, params });
    }

    getTopRated(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        }
    return this.http.get<any>(`${this.apiUrl}movie/top_rated`, { headers: this.headers, params });
    }

    getUpcomingMovies(paramsObj: any) {
        let params = new HttpParams();
        for (const key in paramsObj) {
            if (paramsObj.hasOwnProperty(key)) {
            params = params.set(key, paramsObj[key]);
            }
        }
    return this.http.get<any>(`${this.apiUrl}movie/upcoming`, { headers: this.headers, params });
    }

      
    
    getBannerImage(id: number) {
        return this.http.get(`${this.apiUrl}/movie/${id}/images`, { headers: this.headers })
    }
    
    getBannerVideo(id: number) {
        return this.http.get(`${this.apiUrl}movie/${id}/videos`, { headers: this.headers });
    }
    
    getBannerDetail(id: number) {
        return this.http.get(`${this.apiUrl}/movie/${id}`, { headers: this.headers });
    } 

}