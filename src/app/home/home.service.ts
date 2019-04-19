import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs/Rx'
import { Response } from '@angular/http'

@Injectable()

export class HomeService{

    constructor(private http: HttpClient){};

    public getData(): Observable<any>{
        return this.http.get('https://reqres.in/api/users?page=2').map((data)=>{return data});
    }
}