import {FormControl} from "@angular/forms";

export interface ProviderSearchForm {
  age: FormControl<number>;
  zipCode: FormControl<string>;
  hasHealthInsurance: FormControl<boolean>;
}
