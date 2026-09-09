import { Component, signal } from '@angular/core';
import { form } from '@angular/forms/signals';
import { myVeryBigArray } from './big-array';

@Component({
  selector: 'app-form-init',
  template: 'Form component',
})
export class FormInit {
  constructor() {
    console.time('initialize form');
    const _form = form(signal(myVeryBigArray));
    console.log(_form().value().length);
    setTimeout(() => {
      console.timeEnd('initialize form');
    }, 0);
  }
}
