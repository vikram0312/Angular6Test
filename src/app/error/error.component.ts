import { Component } from '@angular/core';

@Component({
  selector: 'error-page',
  template: `<h1>Hello {{name}}</h1>`
})
export class ErrorComponent  { name = 'you are at error page'; }