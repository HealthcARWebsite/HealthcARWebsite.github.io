import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HealthcareProvider } from "./interfaces/healthcare-provider.interface";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private http: HttpClient) { }

  get healthcareProvider$(): Observable<HealthcareProvider[]> {
    return this.http.get<HealthcareProvider[]>('assets/mock-providers.json');
  }
}
