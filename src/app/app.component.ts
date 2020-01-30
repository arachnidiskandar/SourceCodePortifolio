import { Component, OnInit } from '@angular/core';
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
    // FOR THE SAKE OF THE DEMO, let's add a small delay here so that the app can be
    // in a "loading" state for a "visible" amount of time.
    setTimeout(
        () => {
            this.appReadyEvent.trigger();
        },
        1000
    );

  }
}
