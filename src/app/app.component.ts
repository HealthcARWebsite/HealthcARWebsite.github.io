import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'HealthcAR';

  ngOnInit() {
    window.open("https://healthcarwebsite.github.io/", "_self")
  }
}
