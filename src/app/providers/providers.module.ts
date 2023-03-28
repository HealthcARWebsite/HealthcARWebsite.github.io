import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { ProviderSearchComponent } from './provider-search/provider-search.component';
import { ProviderListComponent } from './provider-list/provider-list.component';
import { ProviderFooterComponent } from './provider-footer/provider-footer.component';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatSortModule } from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { ContactUsComponent } from './provider-footer/contact-us/contact-us.component';
import {EmailResultsComponent} from './provider-footer/email-results/email-results.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [
    ProvidersComponent,
    ProviderSearchComponent,
    ProviderListComponent,
    ProviderFooterComponent,
    ContactUsComponent,
    EmailResultsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule
  ]
})
export class ProvidersModule {
}
