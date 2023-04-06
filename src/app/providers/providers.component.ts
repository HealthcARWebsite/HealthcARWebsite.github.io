import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent implements OnInit {
  ngOnInit() {
    window.scroll({
      top: 0,
      left: 0,
    });
  }
}
