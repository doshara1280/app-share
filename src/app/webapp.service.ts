import { Injectable } from '@angular/core';
import { Webapp } from './dummy';
import { WEBAPP_S } from './dummy_apps';

@Injectable({
  providedIn: 'root'
})
export class WebappService {

  constructor() { }
  getWebapp(): Webapp[] {
    return WEBAPP_S;
  }
}
