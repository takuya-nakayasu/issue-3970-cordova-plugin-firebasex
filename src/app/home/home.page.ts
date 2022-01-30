import { Component } from '@angular/core';
import { FirebaseX } from '@awesome-cordova-plugins/firebase-x/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private firebaseX: FirebaseX) {}

  public callIncrementCounter() {
    this.firebaseX
      .incrementCounter('testName')
      .then(() => console.log('incrementCounter called successfully'))
      .catch((error) => console.error('Error getting token', error));
  }
}
