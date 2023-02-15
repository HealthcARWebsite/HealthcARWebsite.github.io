import { Component } from '@angular/core';
import { HealthcareProvider } from "../interfaces/healthcare-provider.interface";
import { ProvidersService } from "../providers.service";
import { MatTableDataSource } from "@angular/material/table";
import { map, Observable } from "rxjs";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent {

  displayedColumns = ["name", "description", "url", "zipCode"];

  healthcareProvidersAsMatTableDataSource$: Observable<MatTableDataSource<HealthcareProvider>> =
    this.providersService.healthcareProvider$.pipe(
      map((providers) => {
          const dataSource = this.dataSource;
          dataSource.data = providers;
          return dataSource;
      })
    );

  private dataSource = new MatTableDataSource<HealthcareProvider>([]);

  constructor(private providersService: ProvidersService) {
  }

  ngOnInit() {
    this.getProvidersList();
  }

  getProvidersList() {
    this.providersService.healthcareProvider$
      .subscribe((response) => {
        console.log(response);
      })
  }
}
