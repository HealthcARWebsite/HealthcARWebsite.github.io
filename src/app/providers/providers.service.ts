import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HealthcareProvider } from "./interfaces/healthcare-provider.interface";
import { Observable } from "rxjs";
import {ContactUsInterface} from "./interfaces/contact-us-interface.interface";
import {ProviderSearchInterface} from "./interfaces/provider-search-interface.interface";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private baseUrl = "https://fierce-bastion-74208.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  healthcareProvider(formData?: ProviderSearchInterface): Observable<HealthcareProvider[]> {
    const url = `${this.baseUrl}/providers/get-providers`
    // TODO add query params with formData and remove ? from parameters
    return this.http.get<any>(url,);
    // return this.http.get<HealthcareProvider[]>('assets/mock-providers.json');
  }

  contactUs(formData: ContactUsInterface): Observable<any> {
    const url = `${this.baseUrl}/providers/contact-us`
    return this.http.post<any>(url, formData);
  }
}
