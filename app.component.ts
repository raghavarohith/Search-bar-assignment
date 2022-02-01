import { Component } from '@angular/core';
import { MarvelService } from './marvel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  data:any=[];
  
  search:string =" ";
  constructor(private marvelservice:MarvelService) { }

  ngOnInit(): void {

  
    this.marvelservice.getnames().subscribe((result)=>{
      console.log(result);
      this.data = result.data.results;
    })

   console.log(this.data,"dhbchd")
   }
  searchbyname(){
    console.log("search working")
    this.marvelservice.getCharacterByName(this.search).subscribe((result)=>{
      console.log(result);
      if(result.data.count>0)
      {
        
        this.data = result.data.results;
        console.log(result);
      }
      else{
        alert("no items");
        this.ngOnInit();
      }
    })
  }

}
