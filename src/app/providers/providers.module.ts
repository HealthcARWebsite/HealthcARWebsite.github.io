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


@NgModule({
  declarations: [
    ProvidersComponent,
    ProviderSearchComponent,
    ProviderListComponent,
    ProviderFooterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatTableModule
  ]
})
export class ProvidersModule { }
