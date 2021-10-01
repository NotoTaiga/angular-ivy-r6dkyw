import { Component, VERSION } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private dataService: DataService) {}

  updateValue() {
    const value = new Date().toISOString();
    this.dataService.setValue(value);
  }
}
