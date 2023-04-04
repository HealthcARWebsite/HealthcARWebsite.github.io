import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HealthcareProvider} from "./interfaces/healthcare-provider.interface";
import {catchError, map, Observable, Subject} from "rxjs";
import {ContactUsInterface} from "./interfaces/contact-us-interface.interface";
import {ProviderSearchInterface} from "./interfaces/provider-search-interface.interface";
import {MatTableDataSource} from "@angular/material/table";

@Injectable({
  providedIn: 'root'
})
export class ProvidersService {

  private subjectName = new Subject<any>();

  private baseUrl = "https://fierce-bastion-74208.herokuapp.com";

  constructor(private http: HttpClient) {
  }

  // getHealthcareProviders(formData: ProviderSearchInterface) {
  //   const url = `${this.baseUrl}/providers/get-providers`
  //   this.http.get<any>(url, {params: formData as any}).pipe(
  //     map((providers) => {
  //       const dataSource = this.dataSource;
  //       dataSource.data = providers;
  //       return dataSource;
  //     })
  //   );
  // }

  // sendUpdate(message: string) { //the component that wants to update something, calls this fn
  //   this.subjectName.next({text: message}); //next() will feed the value in Subject
  // }

  getUpdate(): Observable<any> { //the receiver component calls this function
    return this.subjectName.asObservable(); //it returns as an observable to which the receiver funtion will subscribe
  }

  sendUpdate(formData: ProviderSearchInterface) {
    const url = `${this.baseUrl}/providers/get-providers`
    this.http.get<any>(url, {params: formData as any})
      .pipe(
        //if request fails then an empty array will be returned
        //TODO potentially change this if Chris thinks it's a bad idea
        catchError(_ => {
          this.subjectName.next([])
          console.log("there was error");
          return [];
        })
      )
      .subscribe({
          next: response => this.subjectName.next(response),
          error: e => console.error(e)
        }
      )
  }

  // healthcareProviders(formData?: ProviderSearchInterface): Observable<HealthcareProvider[]> {
  //   const url = `${this.baseUrl}/providers/get-providers`
  //   return this.http.get<any>(url, {params: formData as any});
  //   // return this.http.get<HealthcareProvider[]>('assets/mock-providers.json');
  // }

  contactUs(formData: ContactUsInterface): Observable<any> {
    const url = `${this.baseUrl}/providers/contact-us`
    return this.http.post<any>(url, formData);
  }
}
