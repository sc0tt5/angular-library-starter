import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() {}

  getTestOne() {
    console.log('getTestOne:::', true);
  }

  getTestTwo() {
    console.log('getTestTwo:::', true);
  }
}
