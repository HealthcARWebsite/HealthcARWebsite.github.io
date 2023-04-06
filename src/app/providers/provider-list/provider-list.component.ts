import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {HealthcareProvider} from "../interfaces/healthcare-provider.interface";
import {ProvidersService} from "../providers.service";
import {MatTableDataSource} from "@angular/material/table";
import {map, Observable} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-provider-list',
  templateUrl: './provider-list.component.html',
  styleUrls: ['./provider-list.component.scss']
})
export class ProviderListComponent implements OnInit {

  displayedColumns = [''];

  healthcareProvidersAsMatTableDataSource$: Observable<MatTableDataSource<HealthcareProvider>> =
    this.providersService.getHealthcareProviders().pipe(
      map((providers) => {
        const dataSource = this.dataSource;
        dataSource.data = providers;
        return dataSource;
      })
    );

  windowSize = window.innerWidth;

  private dataSource = new MatTableDataSource<HealthcareProvider>([]);

  constructor(public providersService: ProvidersService) {
  }

  ngOnInit() {
    this.setColumns();
  }

  @ViewChild('scheduledOrdersPaginator') set paginator(pager: MatPaginator) {
    if (pager) {
      // noinspection TypeScriptValidateTypes; strict TS doesn't complain but WebStorm does
      this.dataSource.paginator = pager;
    }
  };

  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any; }; }) {
    this.windowSize = event.target.innerWidth;
    this.setColumns();
  }

  @ViewChild(MatSort) set sort(sorter: MatSort) {
    if (sorter) {
      this.dataSource.sort = sorter;
    }
  }

  private setColumns() {
    if (this.windowSize > 900) {
      this.displayedColumns = ["name", "description", "url", "zipcode"]
    } else {
      this.displayedColumns = ["name", "description", "zipcode"]
    }
  }
}
