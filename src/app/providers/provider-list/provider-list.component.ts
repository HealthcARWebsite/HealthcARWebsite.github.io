import {Component, ViewChild} from '@angular/core';
import {HealthcareProvider} from "../interfaces/healthcare-provider.interface";
import {ProvidersService} from "../providers.service";
import {MatTableDataSource} from "@angular/material/table";
import {map, Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.css']
})
export class ProviderListComponent {

  displayedColumns = ["name", "description", "url", "zipCode"];


  healthcareProvidersAsMatTableDataSource$: Observable<MatTableDataSource<HealthcareProvider>> =
    this.providersService.getUpdate(
      //   {
      //   "age": 46,
      //   "zipCode": "72324",
      //   "hasHealthInsurance": true
      // }
    ).pipe(
      map((providers) => {
        const dataSource = this.dataSource;
        dataSource.data = providers;
        console.log(dataSource)
        return dataSource;
      })
    );

  private dataSource = new MatTableDataSource<HealthcareProvider>([]);

  @ViewChild('scheduledOrdersPaginator') set paginator(pager: MatPaginator) {
    if (pager) {
      this.dataSource.paginator = pager;
    }
  };

  @ViewChild(MatSort) set sort(sorter: MatSort) {
    if (sorter) this.dataSource.sort = sorter;
  }

  constructor(private providersService: ProvidersService) {
  }
}
