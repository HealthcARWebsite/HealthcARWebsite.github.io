import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HealthcareProvider} from "./interfaces/healthcare-provider.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {ContactUsInterface} from "./interfaces/contact-us-interface.interface";
import {ProviderSearchInterface} from "./interfaces/provider-search-interface.interface";
import {EmailSearchResultsInterface} from "./interfaces/email-results-interface.interface";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  isTableLoading = false;

  isSearchFormValid = false;

  emailSearchResultsFormData = <EmailSearchResultsInterface>{};

  #healthcareProviders = new BehaviorSubject<HealthcareProvider[]>([]);

  #baseUrl = "https://fierce-bastion-74208.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  getHealthcareProviders(): Observable<HealthcareProvider[]> {
    return this.#healthcareProviders.asObservable();
  }

  updateHealthcareProviders(formData: ProviderSearchInterface) {
    this.isTableLoading = true;
    const url = `${this.#baseUrl}/providers/get-providers`
    // this.http.get<HealthcareProvider[]>('assets/mock-providers.json', {params: formData as any})
    this.http.get<HealthcareProvider[]>(url, {params: formData as any})
      .subscribe({
          next: (result) => {
            this.isTableLoading = false;
            this.#healthcareProviders.next(result)
          },
          error: (e) => {
            this.isTableLoading = false;
            // pass empty array if there's an error
            this.#healthcareProviders.next([])
            console.error(e)
          }
        }
      )
  }

  contactUs(formData: ContactUsInterface): Observable<any> {
    const url = `${this.#baseUrl}/providers/contact-us`
    return this.http.post<any>(url, formData);
  }

  emailSearchResults(formData: string): Observable<any> {
    const url = `${this.#baseUrl}/providers/email`
    this.emailSearchResultsFormData.emailAddress = formData
    // return this.http.post<any>(url,  {'zipcode':'72555', 'emailAddress':'minori6kaemon@gmail.com'});
    // return this.http.post<any>(url,  JSON.stringify({'zipcode':'72555', 'emailAddress':'minori6kaemon@gmail.com'}));
    return this.http.post<any>(url, this.emailSearchResultsFormData);
  }
}
