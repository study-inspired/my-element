import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @Input() userName: string;
  title = 'my-element';
  isShow: boolean = true;

  constructor() {

  }

  ngOnInit(): void {

    setTimeout(() =>
    {
      this.title = localStorage.getItem('name');
    }, 1000);
  }

}
