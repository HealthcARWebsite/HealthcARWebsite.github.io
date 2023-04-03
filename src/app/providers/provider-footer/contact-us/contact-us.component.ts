import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ContactUsInterface} from "../../interfaces/contact-us-interface.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProvidersService} from "../../providers.service";
import {ContactUsFormInterface} from "../../interfaces/contact-us-form.interface";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm = new FormGroup(<ContactUsFormInterface>{
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.pattern('[- +()0-9]+')),
    organization: new FormControl(''),
    message: new FormControl('', Validators.required)
  })

  constructor(
    public dialogRef: MatDialogRef<ContactUsComponent>,
    private snackBar: MatSnackBar,
    private providersService: ProvidersService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      this.providersService.contactUs(this.contactForm.value as ContactUsInterface).subscribe({
        error: (e) => {
          console.error(e);
          this.snackBar.open('Message Failed', 'Close', {duration: 3000});
        },
        complete: () => this.snackBar.open('Message Sent', 'Close', {duration: 3000})
      })
      this.dialogRef.close();
    } else {
      this.snackBar.open('Invalid Form', 'Close', {duration: 3000});
    }
  }
}
