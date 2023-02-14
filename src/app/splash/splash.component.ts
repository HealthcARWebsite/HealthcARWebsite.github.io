import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent {
  constructor(private readonly router:Router) {
  }

  goToProviders(languageCode: string): void{
    console.log(languageCode) //TODO: make links to localized version
    void this.router.navigate(['/providers'])
  }
}
