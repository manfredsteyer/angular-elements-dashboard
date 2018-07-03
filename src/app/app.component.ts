import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flight-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World! Manfred war hier. Du wurdest gehaaackt!!!';

  close() {
    console.debug('close app');
  }
}

// <flight-app>