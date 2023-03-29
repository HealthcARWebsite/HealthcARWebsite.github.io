import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HealthcareProvider } from "./interfaces/healthcare-provider.interface";
import { Observable } from "rxjs";
import { ContactUsInterface } from "./interfaces/contact-us-interface.interface";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {
  constructor(private http: HttpClient) {
  }

  get healthcareProvider$(): Observable<HealthcareProvider[]> {
    return this.http.get<HealthcareProvider[]>('assets/mock-providers.json');
  }

  contactUs(formData: ContactUsInterface): Observable<any> {
    //TODO add correct URL
    return this.http.post<any>('fakeURL', JSON.stringify(formData));
  }
}
