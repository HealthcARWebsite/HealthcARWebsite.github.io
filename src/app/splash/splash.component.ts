import {Component} from '@angular/core';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent {
  goToProviders(languageCode: string) {
    window.open(`https://HealthcARWebsite.github.io/${languageCode}/providers`, "_self")
  }
}
