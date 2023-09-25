import { EnvironmentInjector, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environtments/environment.development';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SupplierService {
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
    return this.http.get<any[]>(`${this.baseURL}suppliers`, {
      headers,
    });
  }
  post(obj: any) {
    const headers = {
      'Content-Type': 'application/json',
      'x-access-token': this.token,
    };
    const body = obj;
    return this.http.post<any[]>(`${this.baseURL}suppliers`, body, {
      headers,
    });
  }
}
