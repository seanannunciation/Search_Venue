import { Component } from '@angular/core';
import {SearchResults} from '../services/searchresults.services';

@Component({
  selector: 'user',
  template: `
  <div class="venue">
  <h1>Select Venue </h1>
  <input type="text" id="inputtext" placeholder="search venues..."/>
  <button id="search">Go</button>
  <div id="output">
    <div class="col" id="venue_list" *ngFor="let value of searchresults">
      <img class="card-img-top" src="{{value.imageUrl}}" alt="Venue Image">
      <p class="card-text">{{value.name}}</p>
      <div class="location">
      <p class="card-text location">{{value.location}} | {{value.distance}} mi</p>
      </div>
    </div>
  </div>
  </div>
    `,
    providers:[SearchResults]
})
export class UserComponent  {
   searchresults : Searchval[];

   constructor(private searchValues : SearchResults){
     // let parameter="Alpine";
     this.searchValues.getSearchResults().subscribe(values => {
       console.log(values);
       this.searchresults = values;

     });

   }
  }

  interface Searchval{
    name: string;
    location: string;
    imageUrl: string;
  }
