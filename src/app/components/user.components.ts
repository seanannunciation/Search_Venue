import { Component } from '@angular/core';
import {SearchResults} from '../services/searchresults.services';

@Component({
  selector: 'user',
  template: `
  <div class="venue">
    <h1>Select Venue </h1>
      <div class="results">
        <input type="text" id="inputtext" (keyup)="searchvenues($event.target.value)" placeholder="search venues..."/>
          <div class="col" id="venue_list" *ngFor="let value of searchresults">
            <img class="card-img-top" src="{{value.imageUrl}}" alt="Venue Image">
            <p class="card-text">{{value.name}}</p>
            <p class="location">{{value.location}} | {{value.distance}} mi</p>
          </div>
      </div>
  </div>
    `,
    providers:[SearchResults]
})
export class UserComponent  {
   searchresults : Searchval[];
   private searchResultService;

//obtain values from the api call to display
   constructor(private searchValues : SearchResults){
     this.searchResultService = searchValues;
     this.searchValues.getSearchResults().subscribe(values => {
       console.log(values);
       this.searchresults = values;
     });
   }

   // pass user input search value to get search results for the respective value
   private searchvenues(value : string ){
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
