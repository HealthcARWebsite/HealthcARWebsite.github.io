import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ProvidersService} from "../../providers.service";

@Component({
  selector: 'app-email-results',
  templateUrl: './email-results.component.html',
  styleUrls: ['./email-results.component.css']
})
export class EmailResultsComponent {
  emailForm = new FormGroup({
    email: new FormControl('',
      Validators.compose([
        Validators.email,
        Validators.required
      ]))
  })

  constructor(
    public dialogRef: MatDialogRef<EmailResultsComponent>,
    private snackBar: MatSnackBar,
    private providersService: ProvidersService) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    if (this.providersService.isSearchFormValid && this.emailForm.valid) {
      this.providersService.emailSearchResults(this.emailForm.value as string).subscribe({
        error: (e) => {
          console.error(e);
          this.snackBar.open(ProvidersService.snackBarMessages.MessageFailed,
            ProvidersService.snackBarMessages.Close, {duration: 3000});
        },
        complete: () => this.snackBar.open(ProvidersService.snackBarMessages.MessageSent,
          ProvidersService.snackBarMessages.Close, {duration: 3000})
      })
      this.dialogRef.close();
    } else if (!this.providersService.isSearchFormValid) {
      this.snackBar.open(ProvidersService.snackBarMessages.InvalidSearchTerms,
        ProvidersService.snackBarMessages.Close, {duration: 3000});
    } else if (!this.emailForm.valid) {
      this.snackBar.open(ProvidersService.snackBarMessages.InvalidEmail,
        ProvidersService.snackBarMessages.Close, {duration: 3000});
    } else {
      this.snackBar.open(ProvidersService.snackBarMessages.InvalidForm,
        ProvidersService.snackBarMessages.Close, {duration: 3000});
    }
  }
}
