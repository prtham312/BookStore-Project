import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseURL = 'https://bookstore.incubation.bridgelabz.com/';
  constructor(private http : HttpClient) {}

getHeader() {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token') || '',
    });
  }

  getApi(endpoint: string, headers?: HttpHeaders) {
    return this.http.get(this.baseURL + endpoint, {
      headers: headers || this.getHeader(),
    });
  }

  postApi(endpoint: string, payload: any, headers?: HttpHeaders) {
    return this.http.post(this.baseURL + endpoint, payload, {
      headers: headers || this.getHeader(),
    });
  }

}
