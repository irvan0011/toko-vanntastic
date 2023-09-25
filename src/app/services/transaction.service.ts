import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environtments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  baseURL: String = environment.apiURL;
  token: string = environment.token;
  headers = {
    'Content-Type': 'application/json',
    'x-access-token': this.token,
  };
  constructor(private http: HttpClient) {}
  get(): Observable<any> {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    };
    return this.http.get<any[]>(`${this.baseURL}barang-in`, {
      headers,
    });
  }
  post(obj: any) {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    };
    const body = obj;
    return this.http.post<any[]>(`${this.baseURL}barang-in`, body, {
      headers,
    });
  }
}
