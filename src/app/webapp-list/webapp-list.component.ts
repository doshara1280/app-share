import { Component, OnInit } from '@angular/core';
import { WebappService } from '../webapp.service';
import { Webapp } from '../dummy';
// import { WEBAPP_S } from '../dummy_apps';

@Component({
  selector: 'app-webapp-list',
  templateUrl: './webapp-list.component.html',
  styleUrls: ['./webapp-list.component.css']
})
export class WebappListComponent implements OnInit {
  webapp_s: Webapp[] = [];
  constructor(private webappService: WebappService) { }
  // これがないと出力できないのはなぜ？
  ngOnInit() {
    this.getWebapp();
  }
  getWebapp(): void {
    this.webapp_s = this.webappService.getWebapp();
  }
}
