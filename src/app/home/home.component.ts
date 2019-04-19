import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from "./home.service";

@Component({
  selector: 'home-page',
  template: `<h1>Hello {{name}}</h1><button (click)=(goToForm())>go to form</button> </h1><button (click)=(getData())>get Data from Server</button>`
})
export class HomeComponent  { 
  name = 'you are at home page'; 

  constructor(
    private router: Router,
    private homeService : HomeService
  ){};

  public goToForm(): void {
    this.router.navigate(['form'])
  }

  public getData(): void {
    const data = this.homeService.getData().subscribe((data)=>console.log(data))
  }
}