import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";

import { Urlapi } from "./apiurl";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AppService {
    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        return Observable.throw(error);
    }
    constructor(private http: Http) { }
    simpan(param): Observable<any> {
        const body = JSON.stringify(param);
        return this.http.post(Urlapi + '/cabang/buat', body, this.jwt())
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }

    dataid() {
        let searchUrl = Urlapi + '/api/';
        return this.http.get(searchUrl).map(res => res.json());
    }

    dataworld() {
        let searchUrl = 'https://covid19.mathdro.id/api/';
        return this.http.get(searchUrl).map(res => res.json());
    }

    
    dataprov() {
        let searchUrl = 'https://indonesia-covid-19.mathdro.id/api/provinsi';
        return this.http.get(searchUrl).map(res => res.json());
    }

    


    getById(id) {
        let searchUrl = Urlapi + '/cabang/byid/' + id;
        return this.http.get(searchUrl, this.jwt())
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    edit(param) {
        const body = JSON.stringify(param);
        return this.http.post(Urlapi + '/cabang/edit/' + param.id, body, this.jwt())
        .map((response: Response) => response.json())
        .catch(this.handleError);
    }
    deletedata(param) {
        const body = JSON.stringify(param);
        return this.http.post(Urlapi + '/cabang/hapus/' + param.id, body, this.jwt())
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}