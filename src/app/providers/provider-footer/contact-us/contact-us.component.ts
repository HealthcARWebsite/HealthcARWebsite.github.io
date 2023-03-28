import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ContactUsInterface} from "../../interfaces/contact-us-interface.interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.pattern('[- +()0-9]+')),
    organization: new FormControl(''),
    message: new FormControl('', Validators.required)
  })
  protected data: ContactUsInterface = {name: '', email: '', phone: '', organization: '', message: ''}

  constructor(
    public dialogRef: MatDialogRef<ContactUsComponent>,
    private snackBar: MatSnackBar) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      //TODO send post request
      this.dialogRef.close();
    } else {
      this.snackBar.open('Invalid Form', 'Close', {
        duration: 3000
      });
    }
  }
}
