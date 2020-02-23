import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AppReadyEvent } from './shared/AppReadyEvent';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Augusto Rafael | Desenvolvedor Front-End';
  private appReadyEvent: AppReadyEvent;

  constructor(appReadyEvent: AppReadyEvent) {
    this.appReadyEvent = appReadyEvent;
  }
  ngOnInit() {
    document.onreadystatechange = () => {
      if (document.readyState === 'complete') {
        this.appReadyEvent.trigger();
      }
    };
  }
}
