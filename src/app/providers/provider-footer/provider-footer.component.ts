import { Component } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { EmailResultsComponent } from "./email-results/email-results.component";

@Component({
  selector: 'app-provider-footer',
  templateUrl: './provider-footer.component.html',
  styleUrls: ['./provider-footer.component.scss']
})
export class ProviderFooterComponent {
  // TODO: make selector for other language versions

  constructor(public dialog: MatDialog) {
  }

  openEmailResultsDialog(): void {
    this.dialog.open(EmailResultsComponent);
  }

  openContactUsDialog(): void {
    this.dialog.open(ContactUsComponent, {width: '30rem'});
  }
}
