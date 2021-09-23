import { Component, OnInit } from '@angular/core';

declare var UIkit: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'web';

  ngOnInit() {
    UIkit.modal('#contact-info').show();
  }
}
