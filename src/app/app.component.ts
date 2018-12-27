import { Component } from '@angular/core';
import { LoadIndicatorService } from './cdktest/loadindicator-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdkapp';

  constructor(private loadIndicatorService: LoadIndicatorService) {

  }

  onClick() {
    this.loadIndicatorService.reveal();
    setTimeout(() => this.loadIndicatorService.hide(), 5000);
  }
}
