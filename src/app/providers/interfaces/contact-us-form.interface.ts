import { FormControl } from "@angular/forms";

export interface ContactUsFormInterface {
  name: FormControl<string>;
  email: FormControl<string>;
  phone: FormControl<string>;
  organization: FormControl<string>;
  message: FormControl<string>;
}
