import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormInit } from './form-init';
import { myVeryBigArray } from './big-array';

@Component({
  imports: [RouterOutlet, FormInit],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  readonly bigArray = myVeryBigArray;
  protected readonly title = signal('angular-form-bug');
  protected readonly showForm = signal(false);
}
