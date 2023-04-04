import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProviderSearchForm} from "../interfaces/provider-search-form.interface";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProvidersService} from "../providers.service";
import {ProviderSearchInterface} from "../interfaces/provider-search-interface.interface";
import {map} from "rxjs";

@Component({
  selector: 'app-provider-search',
  templateUrl: './provider-search.component.html',
  styleUrls: ['./provider-search.component.css']
})
export class ProviderSearchComponent {
  providerSearchForm = new FormGroup(<ProviderSearchForm>{
    age: new FormControl<number | null>(null, Validators.compose(
      [
        Validators.required,
        Validators.pattern('[0-9]{1,3}')
      ])),
    zipCode: new FormControl('', Validators.compose(
      [
        Validators.required,
        Validators.pattern('[0-9]{5}'),
        Validators.min(71500),
        Validators.max(73000)
      ])),
    hasHealthInsurance: new FormControl(false, Validators.required)
  })

  constructor(
    private snackBar: MatSnackBar,
    private providersService: ProvidersService) {
  }

  onSearch(): void {
    if (this.providerSearchForm.valid) {
      console.log(this.providerSearchForm.value);
      this.providersService.sendUpdate(this.providerSearchForm.value as ProviderSearchInterface);
    } else {
      this.snackBar.open('Invalid Form', 'Close', {duration: 3000});
    }
  }
}

