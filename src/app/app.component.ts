import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  title = 'my-element';
  isShow: boolean;

  constructor() {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.isShow = true;
    }, 3000);

  }

}
