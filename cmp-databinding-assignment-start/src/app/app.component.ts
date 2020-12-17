import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  startInterval(startNumber: number) {
    startNumber % 2 === 0 ? this.evenNumbers.push(startNumber) : this.oddNumbers.push(startNumber);
  }
}
