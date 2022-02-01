import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
 tit:string="hello"
 Base_url="https://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=a38f46b0df1bf86b17c1b572894d3147&hash=7c744c5c951557364967c12a31dd5319"
  constructor(private http: HttpClient) { }

  getnames():Observable<any>{
    console.log("working");
    return this.http.get(this.Base_url);
    
  }
  getCharacterByName(characterName:string):Observable<any>
  {
    const characterBYNameUrl = `https://gateway.marvel.com:443/v1/public/characters?name=${characterName}&ts=1&apikey=a38f46b0df1bf86b17c1b572894d3147&hash=7c744c5c951557364967c12a31dd5319`;
    return this.http.get(characterBYNameUrl);
  }



}
