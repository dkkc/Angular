import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() startInterval = new EventEmitter<number>();
  interval;
  intervalNumber = 0;
  constructor() { }

  ngOnInit(): void {
  }

  startGame() {
    this.interval = setInterval(() => {
        this.startInterval.emit(this.intervalNumber + 1);
        this.intervalNumber++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval);
  }
}
