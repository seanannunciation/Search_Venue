import { Component } from '@angular/core';
import {SearchResults} from '../services/searchresults.services';

@Component({
  selector: 'user',
  template: `
  <div class="venue">
  <h1>Select Venue </h1>
  <input type="text" id="inputtext" (keyup)="searchvenues($event.target.value)" placeholder="search venues..."/>
    <div class="col" id="venue_list" *ngFor="let value of searchresults">
      <img class="card-img-top" src="{{value.imageUrl}}" alt="Venue Image">
      <p class="card-text">{{value.name}}</p>
      <p class="location">{{value.location}} | {{value.distance}} mi</p>
    </div>
  </div>
    `,
    providers:[SearchResults]


})
export class UserComponent  {
   searchresults : Searchval[];
   param:'' ;

   private searchResultService;

   constructor(private searchValues : SearchResults){
     this.searchResultService = searchValues;
     this.searchValues.getSearchResults().subscribe(values => {
       console.log(values);
       this.searchresults = values;

     });

   }


   private searchvenues(value : string ){
     //this.search=value;
     this.searchResultService.getUserSearchResults(value).subscribe(values => {
       console.log(value);
       this.searchresults = values;
       console.log(this.searchresults);
     });


   }


  }

  interface Searchval{
    name: string;
    location: string;
    imageUrl: string;
  }
